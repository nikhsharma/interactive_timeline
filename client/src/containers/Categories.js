import React, {Component} from 'react';
import "../style/Categories.css";
import { Link } from "react-router-dom";

export default class Categories extends Component {
    render() {
        return <div className="cat-section">
            <div className="cat-content-container">
              <Link to="/rome">
                <div className="cat-content">
                  <h2>Rome</h2>
                </div>
              </Link>
              <Link to="/rome">
                <div className="cat-content">
                  <h2>Some heading text</h2>
                </div>
              </Link>
              <Link to="/rome">
                <div className="cat-content">
                  <h2>Some heading text</h2>
                </div>
              </Link>
              <Link to="/rome">
                <div className="cat-content">
                  <h2>Some heading text</h2>
                </div>
              </Link>
              <Link to="/rome">
                <div className="cat-content">
                  <h2>Some heading text</h2>
                </div>
              </Link>
              <Link to="/rome">
                <div className="cat-content">
                  <h2>Some heading text</h2>
                </div>
              </Link>
              <Link to="/rome">
                <div className="cat-content">
                  <h2>Some heading text</h2>
                </div>
              </Link>
              <Link to="/rome">
                <div className="cat-content">
                  <h2>Some heading text</h2>
                </div>
              </Link>
              <Link to="/rome">
                <div className="cat-content">
                  <h2>Some heading text</h2>
                </div>
              </Link>
              <Link to="/rome">
                <div className="cat-content">
                  <h2>Some heading text</h2>
                </div>
              </Link>
            </div>
          </div>;
    }
}
