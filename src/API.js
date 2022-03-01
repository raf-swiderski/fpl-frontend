const proxyURL = 'https://cors-anywhere.herokuapp.com/';
const baseURL = 'https://fantasy.premierleague.com/api/';
const id = '821650'

const reqType = {
  bootstrap : 'bootstrap-static/', //Overview
  element : 'element-summary/', //Players (playderID)
  events : 'events', // Get all gameweeks
  event : 'event',  //A selected gameweek
  entry : 'entry', //Get a team
  elementTypes: 'element-types', // Get all player positions
  gameweekFixtures: 'fixtures/?event', //Get all fixtures for a specified gameweek (gameweek number)
  teams: 'teams/', //Get all teams,
  leagueClassicStanding: 'leagues-classic/' //Get league standing at current gameweek.
}

async function doCORSRequest(url) {
    try {
        const response = await fetch(proxyURL + baseURL + url);
        const myJson = await response.json();
        return myJson
    } catch (error) {
        console.log(error)
    }
}

function getTeam(id) {
    const data = doCORSRequest(`${reqType.entry}/${id}/`);
    return data;
}

getTeam(id);
