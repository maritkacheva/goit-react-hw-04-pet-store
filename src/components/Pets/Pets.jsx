import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import styles from "./Pets.module.css";
import petsData from "../../assets/pets.json";

class Pets extends PureComponent {
  state = {
    pets: []
  };

  componentDidMount() {
    this.setState({ pets: petsData });
  }

  render() {
    const { pets } = this.state;
    const { match, location } = this.props;
    return (
      <div className={styles.petsContainer}>
        <h3 className={styles.title}>Available pets</h3>
        <ul className={styles.petsList}>
          {pets.map(pet => (
            <li key={pet.id} className={styles.petsListItem}>
              <Link
                to={{
                  pathname: `${match.path}/${pet.id}`,
                  state: { from: location }
                }}
                className={styles.link}
              >
                <img src={pet.image} alt="pet" className={styles.itemImage} />
                <h5 className={styles.itemTitle}>{pet.name}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Pets.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(Pets);
