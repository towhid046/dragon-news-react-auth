import PropTypes from "prop-types";
const SectionTitle = ({ title }) => {
  return <h2 className="text-xl font-semibold mb-4">{title}</h2>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
