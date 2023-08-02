import React from 'react'

const FormatDay = (props) => {
    const {match_date} = props

    // Add a dot after the day
    const formattedDay = match_date.replace(/(\d+)/, '$1.');

    return formattedDay;
};

export default FormatDay