import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { selectClass } from './styles'
import { inputClass } from '../Input/styles'
import { inputTitleClass } from '../InputTitle/styles'
import { isObject, isFunc, isString, isEmpty } from '../utils/is'
import { addResizeObserver } from '../utils/dom/element'
import Input from './Input'
import Caret from '../icons/Caret'
import { isRTL } from '../config'
import More, { getResetMore } from './More'
import InputTitle from '../InputTitle'
import { getKey } from '../utils/uid'
import { getDirectionClass } from '../utils/classname'

export const IS_NOT_MATCHED_VALUE = 'IS_NOT_MATCHED_VALUE'

/**
 * get result className from resultClassName attr
 * @param {function | string} f props => resultClassName
 * @param {any} value result value
 * @returns {string | null}
 */
const getResultClassName = (f, value) => {
  if (isFunc(f)) {
    return f(isObject(value) && value.IS_NOT_MATCHED_VALUE ? value.value : value)
  }
  if (isString(f)) {
    return f
  }
  return null
}

const getResultContent = (data, renderResult, renderUnmatched) => {
  if (isObject(data) && data.IS_NOT_MATCHED_VALUE) {
    if (typeof renderUnmatched === 'function') return renderUnmatched(data.value)
    return isObject(data.value) ? renderResult(data.value) : data.value
  }
  return renderResult(data)
}

// eslint-disable-next-line
function Item({ content, data, disabled, onClick, resultClassName, title = false, only }) {
  const value = data
  const click = disabled || !onClick ? undefined : () => onClick(value)
  const synDisabled = disabled || !click
  return (
    <a
      title={title && isString(content) ? content : null}
      tabIndex={-1}
      className={classnames(
        selectClass(
          getDirectionClass('item'),
          disabled && getDirectionClass('disabled'),
          synDisabled && getDirectionClass('ban'),
          only && 'item-only'
        ),
        getResultClassName(resultClassName, data)
      )}
    >
      {content}
      {!synDisabled && <span className={selectClass('indicator', 'close')} onClick={click} />}
    </a>
  )
}

class Result extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      more: -1,
    }

    this.handleRemove = this.handleRemove.bind(this)
    this.handelMore = this.handelMore.bind(this)
    this.bindResult = this.bindResult.bind(this)
    this.resetMore = this.resetMore.bind(this)
  }

  componentDidMount() {
    const { compressed } = this.props
    if (compressed) {
      this.cancelResizeObserver = addResizeObserver(this.resultEl, this.resetMore, { direction: 'x' })
    }
  }

  componentDidUpdate(preProps) {
    this.updateMore(preProps)
  }

  componentWillUnmount() {
    if (this.cancelResizeObserver) this.cancelResizeObserver()
  }

  bindResult(el) {
    this.resultEl = el
  }

  updateMore(preProps) {
    const { result, compressed, onFilter, keygen, data } = this.props
    if (compressed) {
      let shouldRest = false
      if (preProps.result.length !== result.length || (data || []).length !== (preProps.data || []).length) {
        shouldRest = true
      } else if (preProps.result !== result) {
        const getUnMatchKey = (d, k) => (d && d.IS_NOT_MATCHED_VALUE ? d.value : getKey(d, k))
        const isSameData = (data1, data2, k) => getUnMatchKey(data1, k) === getUnMatchKey(data2, k)
        let i = preProps.result.length - 1
        while (i >= 0) {
          if (!isSameData(result[i], preProps.result[i], keygen)) {
            shouldRest = true
            break
          }
          i -= 1
        }
      }
      if (shouldRest) {
        this.resetMore()
      } else if (result.length && this.shouldResetMore) {
        this.shouldResetMore = false
        this.state.more = getResetMore(
          onFilter,
          this.resultEl,
          this.resultEl.querySelectorAll(`.${selectClass('item')}`)
        )
        this.forceUpdate()
      }
    }
  }

  resetMore() {
    if (!this.props.compressed) return
    this.shouldResetMore = true
    this.state.more = -1
    this.forceUpdate()
  }

  handleRemove(...args) {
    const { onRemove } = this.props
    setTimeout(() => {
      onRemove(...args)
    }, 10)
  }

  isEmptyResult() {
    const { result, renderResult, renderUnmatched } = this.props
    if (result.length <= 0) return true
    const res = result.reduce((acc, cur) => {
      const r = getResultContent(cur, renderResult, renderUnmatched)
      if (!isEmpty(r)) {
        acc.push(cur)
      }
      return acc
    }, [])
    return res.length <= 0
  }

  handelMore(more) {
    this.setState({ more })
  }

  renderItem(data, index) {
    const { renderResult, renderUnmatched, datum, resultClassName } = this.props
    const content = getResultContent(data, renderResult, renderUnmatched)
    if (content === null) return null
    const { more } = this.state
    return (
      <Item
        key={index}
        only={more === 1}
        content={content}
        data={data}
        disabled={datum.disabled(data)}
        onClick={this.handleRemove}
        resultClassName={resultClassName}
        title
      />
    )
  }

  renderMore(items) {
    const { compressedClassName, compressed } = this.props
    const { more } = this.state
    const className = classnames(selectClass('popover'), compressedClassName)

    return [
      <More
        key="more"
        showNum={more}
        className={selectClass(getDirectionClass('item'), 'item-compressed')}
        popoverClassName={className}
        contentClassName={selectClass(getDirectionClass('result'))}
        compressed={compressed}
        data={items}
        more={more}
        cls={selectClass}
      />,
    ]
  }

  renderClear() {
    const { onClear, result, disabled } = this.props

    if (onClear && result.length > 0 && disabled !== true) {
      /* eslint-disable */
      return (
        <div key="clear" onClick={onClear} className={selectClass('close-warpper')}>
          <a
          tabIndex={-1}
          data-role="close"
          className={selectClass('indicator', 'close')}
        />
        </div>
      )
      /* eslint-enable */
    }

    return null
  }

  renderInput(text, key = 'input') {
    const {
      multiple,
      onFilter,
      trim,
      focus,
      onInputFocus,
      onInputBlur,
      setInputReset,
      focusSelected,
      bindFocusInputFunc,
      collapse,
      maxLength,
    } = this.props
    return (
      <Input
        key={`${key}.${focus ? 1 : 0}`}
        onInputFocus={onInputFocus}
        onInputBlur={onInputBlur}
        updatAble={!multiple}
        multiple={multiple}
        focus={focus}
        text={text}
        trim={trim}
        onFilter={onFilter}
        setInputReset={setInputReset}
        focusSelected={focusSelected}
        bindFocusInputFunc={bindFocusInputFunc}
        collapse={collapse}
        maxLength={maxLength}
      />
    )
  }

  renderPlaceholder() {
    const { focus, onFilter, filterText, multiple, innerTitle } = this.props

    if (focus && onFilter) {
      return this.renderInput(multiple ? filterText : '')
    }

    return (
      <span
        key="placeholder"
        className={classnames(
          inputClass('placeholder'),
          selectClass('ellipsis'),
          innerTitle && inputTitleClass('hidable')
        )}
      >
        <span>{this.props.placeholder}</span>
        &nbsp;
      </span>
    )
  }

  renderResult() {
    const {
      multiple,
      compressed,
      result,
      renderResult,
      renderUnmatched,
      onFilter,
      focus,
      filterText,
      resultClassName,
    } = this.props

    if (multiple) {
      let items = result.map((n, i) => this.renderItem(n, i)).filter(n => !isEmpty(n))

      if (compressed) {
        items = this.renderMore(items)
      }

      if (focus && onFilter) {
        items.push(this.renderInput(filterText, result.length))
      }

      return items
    }

    if (onFilter) {
      return this.renderInput(getResultContent(result[0], renderResult, renderUnmatched))
    }

    const v = getResultContent(result[0], renderResult, renderUnmatched)
    const title = isString(v) ? v : undefined

    return (
      <span
        key="result"
        title={title}
        className={classnames(selectClass('ellipsis'), getResultClassName(resultClassName, result[0]))}
      >
        {v}
      </span>
    )
  }

  renderIndicator() {
    const { multiple, showArrow, compressed } = this.props
    if (!showArrow || (multiple && !compressed)) return null
    const showCaret = !multiple
    // eslint-disable-next-line
    return (
      <a key="indicator" tabIndex={-1} className={selectClass('indicator', multiple ? 'multi' : 'caret')}>
        {showCaret && <Caret />}
      </a>
    )
  }

  render() {
    const { compressed, innerTitle, focus, onFilter } = this.props
    const showPlaceholder = this.isEmptyResult()
    const result = showPlaceholder ? this.renderPlaceholder() : this.renderResult()

    const rtl = isRTL()
    const clearEl = this.renderClear()
    const indicator = this.renderIndicator()
    const inner = [result, indicator, clearEl]
    const open = (onFilter && focus) || !showPlaceholder

    return (
      <InputTitle
        innerTitle={innerTitle}
        open={open}
        className={selectClass('title-box')}
        titleClass={selectClass(
          'title-box-title',
          showPlaceholder && 'title-box-title-empty',
          compressed && getDirectionClass('title-box-title-compressed')
        )}
      >
        <div
          ref={this.bindResult}
          className={classnames(
            selectClass(
              getDirectionClass('result'),
              compressed && 'compressed',
              showPlaceholder && 'empty',
              clearEl && 'result-clearable'
            ),
            innerTitle && inputTitleClass(getDirectionClass('item'))
          )}
        >
          {rtl ? inner.reverse() : inner}
        </div>
      </InputTitle>
    )
  }
}

Result.propTypes = {
  datum: PropTypes.object,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  filterText: PropTypes.string,
  focus: PropTypes.bool,
  multiple: PropTypes.bool.isRequired,
  onRemove: PropTypes.func,
  onClear: PropTypes.func,
  onFilter: PropTypes.func,
  onInputBlur: PropTypes.func,
  onInputFocus: PropTypes.func,
  result: PropTypes.array.isRequired,
  renderResult: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  placeholder: PropTypes.string,
  setInputReset: PropTypes.func,
  bindFocusInputFunc: PropTypes.func,
  collapse: PropTypes.func,
  compressed: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  trim: PropTypes.bool,
  renderUnmatched: PropTypes.func,
  showArrow: PropTypes.bool,
  focusSelected: PropTypes.bool,
  compressedClassName: PropTypes.string,
  resultClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  maxLength: PropTypes.number,
  innerTitle: PropTypes.node,
  keygen: PropTypes.any,
  data: PropTypes.array,
}

export default Result
