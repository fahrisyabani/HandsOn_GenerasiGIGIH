import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from '../../../searchSlice'
import { getImages } from '../../../server/Api'
 
function SearchBar({ onSuccess }) {
    const query = useSelector((state) => state.search.query);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const images = await getImages(query, 12);
        onSuccess(images.data);
    };

    const handleChange = async (e) => {
        dispatch(setQuery(e.target.value));
        const images = await getImages(query, 12);
        onSuccess(images.data);
    };

    return (
        <div className="search-wrapper">
        <form onSubmit={handleSubmit} id="form-search">
            <div className="form-group">
                <input
                    onChange={handleChange}
                    type="text"
                    value={query}
                    name="text"
                    placeholder="Search"
                    required
                />
                <button type="submit" className="btn btn-primary">
                    Search
                </button>
            </div>
        </form>
        </div>
    );
}

export default SearchBar;