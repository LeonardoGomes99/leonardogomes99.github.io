window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

function ListRepos(response) {
  let data = response.data;

  for (var x = 0; x < data.length; x++) {
    if (data[x].pushed_at > "2022-01-01T00:00:00Z") {
      var card = `
      <div class="col-md-4 mt-4">
        <div class="card h-100">
              <div class="card-icon-header">
                <a href="https://github.com/LeonardoGomes99" aria-label="Homepage" class="footer-octicon" title="GitHub" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                </a>
              </div>
              <div class="card-body">
                  <h5 class="card-title">${data[x].name}</h5>
                  <p class="card-text">${data[x].description ? data[x].description : "Projeto Sem Descrição" }</p>
              </div>
              <div class="card-footer">
                <a href="${data[x].html_url}" class="card-link" target="_blank" rel="noopener noreferrer">Acessar Repositório</a>
              </div>
        </div>
      </div>
      `;
      $("#projects").append(card);
    }

  }

}

axios({
  method: "get",
  url: "https://api.github.com/users/LeonardoGomes99/repos",
}).then(function (response) {
  ListRepos(response)
});