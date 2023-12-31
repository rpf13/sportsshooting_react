const FormatDay = (props) => {
  const date = props.match_date || props.updated_at || props.created_at;

  // Add a dot after the day
  const formattedDay = date.replace(/(\d+)/, "$1.");

  return formattedDay;
};

export default FormatDay;
