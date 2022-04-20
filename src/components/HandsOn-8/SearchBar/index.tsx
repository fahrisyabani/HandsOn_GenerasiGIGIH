import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setQuery } from "../../../searchSlice";
import { getImages } from "../../../server/Api";

type SearchBarProps = {
    onSuccess: (images: any) => void
}

function SearchBar({ onSuccess }: SearchBarProps) {
    const query = useSelector((state: RootStateOrAny) => {
        return state.search.query;
    });
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const images = await getImages(query, 12);
        onSuccess(images.data);
    };

    const handleChange = async (e: React.ChangeEvent) => {
        const target = e.target as HTMLTextAreaElement;

        dispatch(setQuery(target.value));

        const images = await getImages(query, 12);
        onSuccess(images.data);
    };

    const clearSearch = () => {
        dispatch(setQuery(""));
        onSuccess([]);
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