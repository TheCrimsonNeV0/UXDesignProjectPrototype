import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import {Dropdown} from "primereact/dropdown";

const ContentTypeFilterLibrary = (props) => {
    const [selectedFilter, setSelectedFilter] = useState(props.isDigital ? "eBooks" : "All");
    const [selectedGenre, setSelectedGenre] = useState("All Genres");

    const filterOptions = [
        { label: "All", value: "All" },
        { label: "Books", value: "Books" },
        { label: "Audiobooks", value: "Audiobooks" },
        { label: "eBooks", value: "eBooks" },
        { label: "eAudiobooks", value: "eAudiobooks" },
        { label: "CD / DVD", value: "CD/DVD" },
        { label: "Research", value: "Research" },
    ];

    const genreOptions = [
        { label: "All Genres", value: "All" },
        { label: "Fiction", value: "Fiction" },
        { label: "Non-Fiction", value: "Non-Fiction" },
        { label: "Mystery", value: "Mystery" },
        { label: "Science Fiction", value: "ScienceFiction" },
        { label: "Fantasy", value: "Fantasy" },
        { label: "Biography", value: "Biography" },
        { label: "History", value: "History" },
        { label: "Science", value: "Science" },
        { label: "Romance", value: "Romance" },
        { label: "Thriller", value: "Thriller" },
        { label: "Young Adult", value: "YoungAdult" },
        { label: "Children's Literature", value: "ChildrensLiterature" },
        { label: "Poetry", value: "Poetry" },
        { label: "Graphic Novels", value: "GraphicNovels" },
        { label: "Self-Help", value: "SelfHelp" },
        { label: "Cookbooks", value: "Cookbooks" },
        { label: "Travel", value: "Travel" },
        { label: "Art", value: "Art" },
        { label: "Music", value: "Music" }
    ];


    const onTypeChange = (value) => {
        setSelectedFilter(value);
        props.onTypeChange(value);
    }

    return (
        <div>
            <div style={{marginBottom: "1vh"}}>
                <Dropdown
                    value={selectedFilter}
                    options={filterOptions}
                    onChange={(e) => onTypeChange(e.value)}
                    placeholder="Select Type"
                    className="w-full"
                />
            </div>

            <div style={{marginBottom: "1vh"}}>
                <Dropdown
                    value={selectedGenre}
                    options={genreOptions}
                    onChange={(e) => setSelectedGenre(e.value)}
                    placeholder="Genres"
                    className="w-full"
                />
            </div>

            <div style={{marginTop: "1vh"}}>
                <Button label="Show Available"/>
            </div>
        </div>
    );
};

export default ContentTypeFilterLibrary;
