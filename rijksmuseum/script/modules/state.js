const element = document.getElementById("art-collection");

/**
 * Statemanagement is een object met daarin twee methodes
 * Een functie dat verschillende state weergeeft
 * Loading state, wanneer de pagina geladen wordt. 
 * Error state, voor zoeken
 */
const stateManagement = {
  dataLoaded() {
     // als de data art is geladen, loading text verwijderd
    element.textContent = '';
  },
  // method die kijkt naar de queery en de data lengte
  isSearchEmpty(query, data) {
    if(data.length == 0 ) { 
      element.insertAdjacentHTML("afterbegin",
      `<p>Geen resultaten gevonden op zoekopdracht ${query}</p>`)
    } else {
      console.log('searchEmpty is groter dan 0')
      return true // verwijst render.js
    }
  },
  errorState() {
    element.textContent = 'rijksmuseum is gesloten, tot ziens.';
  }
  }

export {stateManagement}