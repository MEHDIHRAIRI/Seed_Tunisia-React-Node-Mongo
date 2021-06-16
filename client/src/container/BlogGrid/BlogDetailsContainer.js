import PropTypes from "prop-types";
import React from 'react';
import BlogDetails from '../../components/Blog/BlogDetails.jsx';

const BlogDetailsContainer = ({data}) => {
    return (
        <div className="section section-padding fix">
            <div className="container">
                <div className="row mb-n10">

                    <div className="col-lg-8 col-12 order-lg-1 mb-10">
                        <div className="row row-cols-1 no-gutters">
                            <BlogDetails data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
BlogDetailsContainer.propTypes = {
    data: PropTypes.object
};

export default BlogDetailsContainer;
