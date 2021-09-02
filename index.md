<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Navbar</span>
        </div>
    </nav>
    <ul class="nav nav-tabs">
        <li class="nav-item" id="step1" onclick="navigateToSection(this.id)">
            <a class="nav-link active">Step 1</a>
        </li>
        <li class="nav-item" id="step2" onclick="navigateToSection(this.id)">
            <a class="nav-link">Step 2</a>
        </li>
        <li class="nav-item" id="step3" onclick="navigateToSection(this.id)">
            <a class="nav-link">Step 3</a>
        </li>
    </ul>
    <section id="step1-section">
        <div class="row d-flex align-items-center row-wrapper">
            <div class="col">
                <div class="container instructions-text">
                    Step 1
                    Lorem ipsum dolor sit amet.
                </div>
            </div>
            <div class="col">
                <div class="container">
                    <div id="player1"></div>
                </div>
            </div>
        </div>
    </section>
    <section id="step2-section">
        <div class="row d-flex align-items-center row-wrapper">
            <div class="col">
                <div class="container instructions-text">
                    Step 2
                    Lorem ipsum dolor sit amet.
                </div>
            </div>
            <div class="col">
                <div id="player2"></div>
            </div>
        </div>
    </section>
    <section id="step3-section">
        <div class="row d-flex align-items-center row-wrapper">
            <div class="col">
                <div class="container instructions-text">
                    Step 3
                    Lorem ipsum dolor sit amet.
                </div>
            </div>
            <div class="col">
                <div id="player3"></div>
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous">
    </script>
    <script src="app.js"></script>
</body>

</html>