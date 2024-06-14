/* eslint-disable */
class DateLib {
  static unix() {
    return Math.floor(Date.now() / 1000)
  }
  
  static fromUnix(unixTimestamp) {
    return new Date(unixTimestamp * 1000)
  }
  
  static toUnix(date) {
    return Math.floor(date.getTime() / 1000)
  }
  
  // Start of month
  static getSomInUTC(date) {
    const result = new Date(date)
  
    result.setUTCDate(1)
    result.setUTCHours(0)
    result.setUTCMinutes(0)
    result.setUTCSeconds(0)
    result.setUTCMilliseconds(0)
  
    return result
  }
  
  static getEomInUTC(date) {
    const result = new Date(date)
    result.setUTCMonth(result.getUTCMonth() + 1)
  
    result.setUTCDate(0)
  
    result.setUTCHours(23)
    result.setUTCMinutes(59)
    result.setUTCSeconds(59)
  
    return result
  }
  
  static getEodInUTC(date) {
    const result = new Date(date)
    result.setUTCDate(result.getUTCDate() + 1)
  
    result.setUTCHours(23)
    result.setUTCMinutes(59)
    result.setUTCSeconds(59)
  
    return result
  }
  
  static addMonths(date, months) {
    const result = new Date(date)
    result.setUTCMonth(result.getUTCMonth() + parseInt(months))
    return result
  }
  
  static addDays(date, days) {
    const result = new Date(date)
    result.setUTCDate(result.getUTCDate() + parseInt(days))
    return result
  }
  
  static addHours(date, hours) {
    return DateLib.addMinutes(date, parseInt(hours) * 60)
  }
  
  static addMinutes(date, minute) {
    return DateLib.addSeconds(date, parseInt(minute) * 60)
  }
  
  static addSeconds(date, seconds) {
    return DateLib.addMilliseconds(date, parseInt(seconds) * 1000)
  }
  
  static addMilliseconds(date, milliseconds) {
    return new Date(date.getTime() + parseInt(milliseconds))
  }
  
  static toDateFormat(date, locale = 'en', options, preferTimezone) {
    if (parseInt(date) === 0) {
    return 'Not Available'
    }
  
    if (!(date instanceof Date)) {
    date = DateLib.fromUnix(date)
    }
  
    if (preferTimezone) {
    options.timeZone = preferTimezone
    }
  
    return new Intl.DateTimeFormat(locale, options).format(date)
  }
  
  /**
   *
   * @param {string | number | Date} date
   * @param {string} locale
   * @param {string} [preferTimezone]
   * @param {Object.<string, string>} options
   * @returns
   */
  static toLongDateFormat(
    date,
    locale,
    preferTimezone,
    options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'short',
    timeZoneName: 'short'
    }
  ) {
    if (parseInt(date) === 0) {
    return 'Not Available'
    }
  
    if (!(date instanceof Date)) {
    date = DateLib.fromUnix(date)
    }
  
    if (preferTimezone) {
    options.timeZone = preferTimezone
    }
  
    return DateLib.toDateFormat(date, locale, options, preferTimezone)
  }
  
  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings
   * @param {Date | number} [date]
   * @returns {string}
   */
  static toDateTimeLocal(date = new Date()) {
    if (!(date instanceof Date)) {
    date = DateLib.fromUnix(date)
    }
  
    const result = new Date()
    result.setUTCDate(date.getDate())
    result.setUTCFullYear(date.getFullYear())
    result.setUTCHours(date.getHours())
    result.setUTCMilliseconds(date.getMilliseconds())
    result.setUTCMinutes(date.getMinutes())
    result.setUTCMonth(date.getMonth())
    result.setUTCSeconds(date.getSeconds())
  
    // Format: YYYY-MM-DDThh:mm
    return result.toISOString().slice(0, 16)
  }
  
  static relativeTime(timestamp, locale = 'en') {
    let value
    const diff = Math.abs(
    Math.floor((new Date().getTime() - timestamp * 1000) / 1000)
    )
    const minutes = Math.abs(Math.floor(diff / 60))
    const hours = Math.abs(Math.floor(minutes / 60))
    const days = Math.abs(Math.floor(hours / 24))
    const months = Math.abs(Math.floor(days / 30))
    const years = Math.abs(Math.floor(months / 12))
  
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
  
    if (years > 0) {
    value = rtf.format((diff < 0 ? 1 : -1) * years, 'year')
    } else if (months > 0) {
    value = rtf.format((diff < 0 ? 1 : -1) * months, 'month')
    } else if (days > 0) {
    value = rtf.format((diff < 0 ? 1 : -1) * days, 'day')
    } else if (hours > 0) {
    value = rtf.format((diff < 0 ? 1 : -1) * hours, 'hour')
    } else if (minutes > 0) {
    value = rtf.format((diff < 0 ? 1 : -1) * minutes, 'minute')
    } else {
    value = rtf.format((diff < 0 ? 1 : -1) * diff, 'second')
    }
  
    return value
  }
  }
  
  export { DateLib }
  