import React from 'react'

const FormatDay = (props) => {
    const date = props.match_date || props.updated_at;

    // Add a dot after the day
    const formattedDay = date.replace(/(\d+)/, '$1.');

    return formattedDay;
  
};

export default FormatDay




// ORIGINAL CODE TO BE DELETED

// const FormatDay = (props) => {
//     const {match_date} = props

//     // Add a dot after the day
//     const formattedDay = match_date.replace(/(\d+)/, '$1.');

//     return formattedDay;
  
// };

// export default FormatDay