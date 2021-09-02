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
            <span class="navbar-brand mb-0 h1"><h2>Hardware Setup Guide</h2></span>
        </div>
    </nav>
    <ul class="nav nav-tabs">
        <li class="nav-item" id="step1" onclick="navigateToSection(this.id)">
            <a class="nav-link active">Step 1: Volta</a>
        </li>
        <li class="nav-item" id="step2" onclick="navigateToSection(this.id)">
            <a class="nav-link">Step 2: Asha Torso</a>
        </li>
        <li class="nav-item" id="step3" onclick="navigateToSection(this.id)">
            <a class="nav-link">Step 3: Asha's Head</a>
        </li>
        <li class="nav-item" id="step4" onclick="navigateToSection(this.id)">
            <a class="nav-link">Step 4: Zed Mount</a>
        </li>
    </ul>
    <section id="step1-section">
        <div class="row d-flex align-items-center row-wrapper">
            <div class="col">
                <div class="container instructions-text">
                    <h3>Mounting the base stand on the Volta:</h3><br>
                    <ol>
                        <li>Make sure the Volta is turned off, the LEDs on the sides of the Volta will be switched off indicating that the Volta is switched off.</li><br>
                        <li>Mount the provided base stand on top of the Volta using the screws already on the top plate of the Volta.</li><br>
                        <li>Add any additional metal spacers to the top of the stand to increase the overall height of the base</li><br>
                    </ol>
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
                    <h3>Mounting the base plate on Asha and placing the microphone array:</h3><br>
                    <ol>
                        <li>Take out the UMA8 microphone array and the base plate from Asha’s head suitcase</li><br>
                        <li>The base plate and microphone array packaging include the screws and bolts required to mount them in place.</li><br>
                        <li>Place the microphone array on the plastic standoffs on the base plate and use the plastic screws provided in the microphone array box to secure the microphone array to the base plate.</li><br>
                        <li>Use the provided metal standoffs and screws to mount the base plate to Asha’s base.</li><br>
                    </ol>
                    <h3>Mounting Asha's torso on the Volta:</h3><br>
                    <ol>
                        <li>Carefully place Asha onto the circular mount on the base stand.</li><br>
                        <li>Align the body so that the center of Asha approximately aligns with the center of Volta.</li><br>
                        <li>Using the provided allen key and grub screws secure Asha onto the base stand.</li><br>
                    </ol>
                    Note: Check Asha’s alignment with the Volta and if out of place loosen the screws to realign Asha.
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
                    <h3>Mounting Asha’s head onto the Torso:</h3><br>
                    <ol>
                        <li>Take the head out of the head case, release the screw on the side and the pin under the head.</li><br>
                        <li>Slide the head onto the shaft and tighten the two screws on the neck with an allen key.</li><br>
                        <li>Adjust the black chest cloth to secure the plastic window around the RealSense and the USB camera.</li><br>
                        <li>Zip up the head and place the zipper under the plastic head cover carefully. The plastic cover has wires attached to it and should be lifted up gently.</li><br>
                        <li>There are two XT60 power connectors coming out of the head and the body, one is yellow and the other one is black. Connect them according to their respective colours.</li><br>
                        <li>Connect the head RS-485 4 pin to the small PCB board coming out from the body.</li><br>
                        <li>Connect the USB cables coming out from the head and the body according to the provided labels. </li><br>
                    </ol>
                    Note: The head may appear misaligned at first but adjusting it should center the head with the body.
                </div>
            </div>
            <div class="col">
                <div id="player3"></div>
            </div>
        </div>
    </section>
    <section id="step4-section">
        <div class="row d-flex align-items-center row-wrapper">
            <div class="col">
                <div class="container instructions-text">
                    <h3>Assembling and mounting the Zed on Asha</h3><br>
                    <ol>
                        <li>Place the camera into its plastic mount next to the dynamixel motor.</li><br>
                        <li>Remove the provided screws from the dynamixel motor</li><br>
                        <li>Slide the camera mount into the head mount and align the mounting screw hole on the side of the head mount.</li><br>
                        <li>Use the provided screw with the plastic tab to secure the camera mount to the head mount.</li><br>
                        <li>Check that the camera mount is able to freely move around in an arc and then use the dynamixel screws to secure the dynamixel in place.</li><br>
                    </ol>
                </div>
            </div>
            <div class="col">
                <div id="player4"></div>
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous">
    </script>
    <script src="app.js"></script>
</body>

</html>