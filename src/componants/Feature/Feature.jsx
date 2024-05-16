import PropTypes from "prop-types"
import { AiFillCheckSquare } from "react-icons/ai";

const Feature = ({ feature }) => {
    return (
        <div >
            <p className="flex items-center"><AiFillCheckSquare className="text-green-500 mr-2"></AiFillCheckSquare> {feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string,
}
export default Feature;