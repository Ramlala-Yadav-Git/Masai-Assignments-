import React from "react";
import { Searchbar } from "./Searchbar";
import { countries } from "../utils/Countries";

export function SearchBarApp() {
    const [query, setQuery] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [suggestions, setSuggestions] = React.useState([]);
    React.useEffect(() => {
        if (query === "") {
            setSuggestions([]);
        } else {
            let out = countries
                .filter((item) =>
                    item.country.toLowerCase().indexOf(query) !== -1 ? true : false
                )
                .map((item) => item.country);
            setSuggestions(out);
            setLoading(false);
        }
    }, [query]);
    return (
        <div style={{ textAlign: "center", width: "500px", margin: "auto" }}>
            <h1>Search Bar</h1>
            <Searchbar
                value={query}
                setQuery={setQuery}
                loading={loading}
                setLoading={setLoading}
                suggestions={suggestions}
                setSuggestions={setSuggestions}
                onChange={(value) => setQuery(value)}
            />
        </div>
    );
}