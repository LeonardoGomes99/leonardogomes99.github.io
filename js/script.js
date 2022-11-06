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
              <img class="card-img-top" src="//gradientjoy.com/800x400" alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title">${data[x].name}</h5>
                  <p class="card-text">${data[x].description ? data[x].description : "Projeto Sem Descrição" }</p>
              </div>
              <div class="card-footer">
                <a href="${data[x].html_url}" class="card-link">Acessar Repositório</a>
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