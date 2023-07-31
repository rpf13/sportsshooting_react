// Helper functions to transform date objects

const FormatDate = (props) => {

    const {match_date} = props

    // reformat the input, we get from our API
    const [day, month, year] = match_date.split(' ');
    const date = new Date(`${year}-${month}-${day}`);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);

    // customize the date to add the dot after the day
    const formattedDateWithDot = formattedDate.replace(/(\d+)/, '$1.');
    return formattedDateWithDot;
};
    
export default FormatDate