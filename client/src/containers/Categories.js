import React, {Component} from 'react';
import "../style/Categories.css";
import { Link } from "react-router-dom";

export default class Categories extends Component {
    render() {
        return (
            <div className="cat-section">
                <div className="cat-content-container">
                    <Link to="/rome"> <img className="cat-content" src="https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5232386545001_5215063851001-vs.jpg?pubId=5104226627001&videoId=5215063851001" alt="Ancient buildings in rome" /></Link>
                    <Link to="/rome"> <img className="cat-content" src="https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5232386545001_5215063851001-vs.jpg?pubId=5104226627001&videoId=5215063851001" alt="Ancient buildings in rome" /></Link>
                    <Link to="/rome"> <img className="cat-content" src="https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5232386545001_5215063851001-vs.jpg?pubId=5104226627001&videoId=5215063851001" alt="Ancient buildings in rome" /></Link>
                    <Link to="/rome"> <img className="cat-content" src="https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5232386545001_5215063851001-vs.jpg?pubId=5104226627001&videoId=5215063851001" alt="Ancient buildings in rome" /></Link>
                </div>
            </div>
        );
    }
}
