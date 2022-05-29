import "../../Style/Pages.css";

import giftBag from '../../Style/images/bag.jpg';
import giftHeadphone from '../../Style/images/headphone.jpg';

function MomPage() {
  return (
    <div className="pages">
        <div className="container">
            <div className="container-title">
                <h3>Bonne fête maman !</h3>
            </div>
        </div>

        <div className="container">
            <div className="container-title">
                <h3>Vous avez gagné un cadeau !</h3>
            </div>
            <div className="container-body">
                <table>
                    <thead>
                        <tr>
                            <td colSpan="2">A choisir entre :</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Un sac à main de ton choix !<br></br><img className="table-image" src={giftBag} alt="bag"></img></td>
                            <td>Une nouvelle paire d'écouteurs !<br></br><img className="table-image" src={giftHeadphone} alt="headphone"></img></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default MomPage;