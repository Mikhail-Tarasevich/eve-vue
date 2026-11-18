function formatNumber(num=0, numtype='decimal') {
    if ((num>=Number.MAX_SAFE_INTEGER) || (num=="-")) {
        return "-"
    } else {
        return new Intl.NumberFormat('ru-RU', {style: numtype, useGrouping: 'true', maximumFractionDigits: 2, minimumFractionDigits: 2}).format((num))
    }
}