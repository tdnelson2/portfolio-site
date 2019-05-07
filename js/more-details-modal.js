var projects = [{
  id: 'restaurant-reviews',
  title: 'Restaurant Reviews',
  url: 'https://restaurant-reviews-offline.firebaseapp.com/',
  githubURL: 'https://github.com/tdnelson2/mws-restaurant-review-app',
  technogies: ['Vanilla Javascript', 'ES6 Syntax', 'IndexedDB', 'Service Worker', 'WAI-ARIA'],
  description: '<p>An app for reading and posting restaurant reviews.</p>'+
               '<p>NOTE: In the <a href="https://restaurant-reviews-offline.firebaseapp.com/">Live example</a>, when attempting to submit data to the API, it simulates offline use: The data gets stored in IndexedDB and a snackbar message informs the user that the network is unavailable and data will be submited once connectivity is restored.</p>'
},{
  id: 'restaurant-reviews-api',
  title: 'Restaurant Reviews API',
  url: 'https://restaurant-reviews-offline.firebaseapp.com/',
  githubURL: 'https://github.com/tdnelson2/mws-restaurant-reviews-api-flask',
  technogies: ['Flask', 'Flask-CORS', 'SQLAlchemy', 'PostgreSQL'],
  description: '<p>The API for the Restaurant Reviews app.</p>'+
               '<p>NOTE: In the <a href="https://restaurant-reviews-offline.firebaseapp.com/">Live example</a>, when attempting to submit data to the API, it simulates offline use: The data gets stored in IndexedDB and a snackbar message informs the user that the network is unavailable and data will be submited once connectivity is restored.</p>'
},{
  id: 'log-analysis',
  title: 'Log Database Analysis',
  githubURL: 'https://github.com/tdnelson2/Log-Database-Analysis',
  technogies: ['PostgreSQL', 'Psycopg2'],
  description: '<p>A command line app for answering specific questions by analyzing a large database.</p>'
},{
  id: 'money-mapper',
  title: 'MoneyMapper',
  url: 'https://moneymapper.herokuapp.com/',
  githubURL: 'https://github.com/tdnelson2/money-mapper',
  technogies: ['Angular 5', 'ES6', 'Typescript', 'moment.js', 'Picsum API', 'NYTimes API', 'Bootstrap'],
  description: '<p>An app for determining which months in the upcoming year will be lean months and which will be bumper months.</p>'
},{
  id: 'tournament-mananger-react',
  title: 'Swiss Style Tournament Manager: React',
  url: 'https://timothynelson.me/react-tournament-manager/',
  githubURL: 'https://github.com/tdnelson2/Swiss-Tournament-Manager-React',
  technogies: ['React', 'ES6', 'Material-UI', 'flip move', 'JSS'],
  description: '<p>A frontend React app for managing a Swiss style tournament.</p>'
},{
  id: 'partner-map',
  title: 'Partner Map',
  url: '/partner-map/',
  githubURL: 'https://github.com/tdnelson2/udacity-map-project/',
  technogies: ['Google Maps API', 'Vimeo API', 'Knockout.js', 'jQuery'],
  description: '<p>A single-page app for displaying text and videos about locations on a map.</p>'
},{
  id: 'tournament-manager',
  title: 'Tournament Manager',
  url: '/tournament-manager/',
  githubURL: 'https://github.com/tdnelson2/tournament-manager/',
  technogies: ['Flask', 'PostgreSQL', 'Psycopg2', 'OAuth2', 'Knockout.js', 'jQuery', 'Bootstrap'],
  description: '<p>An app for managing Swiss-pairing tournaments.</p>'
},{
  id: 'gregslist',
  title: 'Gregslist',
  url: '/gregslist/',
  githubURL: 'https://github.com/tdnelson2/Item-Catalog-Application/',
  technogies: ['Flask', 'SQLAlchemy', 'PostgreSQL', 'OAuth2', 'Bootstrap'],
  description: '<p>An app for posting goods and services.</p>'
}];

$('#moreDetailsModal').on('show.bs.modal', function(e) {
    var projectID = $(e.relatedTarget).data('project-id');
    var data;
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].id === projectID) {
        data = projects[i];
        break;
      }
    }
    var titleEl = $(e.currentTarget).find('#modal-title');
    var descriptionEl = $(e.currentTarget).find('#modal-description');
    var projectLinkEl = $(e.currentTarget).find('#project-link');
    var repoLinkEl = $(e.currentTarget).find('#project-repo-link');
    var technogiesEl = $(e.currentTarget).find('#technologies-used');
    var linkHTML = '<a class="modal-link" target="_blank" href="'
    if (data) {
      titleEl.html(data.title);
      descriptionEl.html(data.description);
      technogiesEl.html(data.technogies.join(', '));
      if (data.hasOwnProperty('url')) {
        projectLinkEl.html(linkHTML+data.url+'">Live example</a>');
      } else {
        projectLinkEl.html('');
      }
      repoLinkEl.html(linkHTML+data.githubURL+'">Repo</a>');
    } else {
      titleEl.html('ERROR');
      descriptionEl.html('<p>No data provided.</p>');
    }
});
