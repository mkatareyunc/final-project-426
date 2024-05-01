document.addEventListener("DOMContentLoaded", async function() {
    const select_city = document.getElementById("Location");
    const top_div = document.getElementById("topbox");
    const mid_div = document.getElementById("middlebox");
    const bottom_div = document.getElementById("bottombox");
    const leftside = document.querySelector(".leftside");

    // Event listener for city selection
    select_city.addEventListener("change", async () => {
        let city = select_city.value;
    
        if (city === 'Barcelona') {
            try {
                let response = await fetch('http://localhost:3000/tours?longitude=2.11&latitude=41.42&radius=5');
                let jsonData = await response.json();
    
                // Filter data to include only objects with name, rating, and bookingLink
                let filteredData = jsonData.data.filter(activity => 
                    activity.id == 6378340 || activity.id == 6379109 || activity.id == 6379111
                );
                // Sort filtered data by number in ascending order
                filteredData.sort((a, b) => a.id - b.id);
                //6378340(med) 1st ,6379109(wine) 2nd, (6379111)tapas 3rd

                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";

                    
                    let pic1 = document.createElement("div");
                    let pic2 = document.createElement("div");
                    let pic3 = document.createElement("div");

                    pic1.style.height = '170px';
                        pic1.style.width = '170px';
                        pic1.style.margin = '15px';
                        pic1.style.borderRadius = '10px';
                        pic1.style.backgroundImage = "url(activities/barcelona/medFeast.jpg)";
                        pic1.style.backgroundSize = 'cover';
                        pic1.style.backgroundRepeat = 'no-repeats';
                        pic1.style.backgroundPosition = 'center';

                        pic2.style.height = '170px';
                        pic2.style.width = '170px';
                        pic2.style.margin = '15px';
                        pic2.style.borderRadius = '10px';
                        pic2.style.backgroundImage = "url(activities/barcelona/bWineTasting.jpg)";
                        pic2.style.backgroundSize = 'cover';
                        pic2.style.backgroundRepeat = 'no-repeats';
                        pic2.style.backgroundPosition = 'center';

                        pic3.style.height = '170px';
                        pic3.style.width = '170px';
                        pic3.style.margin = '15px';
                        pic3.style.borderRadius = '10px';
                        pic3.style.backgroundImage = "url(activities/barcelona/tapas.jpg)";
                        pic3.style.backgroundSize = 'cover';
                        pic3.style.backgroundRepeat = 'no-repeats';
                        pic3.style.backgroundPosition = 'center';
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
                        activity.location = city;
                        activity.city_pic = "cities/barecelona.jpg";
    
                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
                        let picContainer = document.createElement("div");
                        
                        picContainer.style.height = '100%';
                        picContainer.style.width = '200px'
                        activityDiv.style.height = '100%';
                        activityDiv.style.width = '450px';
                        activityDiv.style.textAlign = 'center';
                        // Set content for the elements
                        activityName.textContent = activity.name;

                        activityBookingLink.style.textDecoration = 'none';
                        activityBookingLink.style.color= 'grey';

                        activityBookingLink.textContent = "Book Activity Now!";
                        activityBookingLink.href = activity.bookingLink || "#";
                        

                        heartIcon.src = "/icons/heart.png";
                        heartIcon.alt = "";
                        heartIcon.style.width = "7%";
                        heartIcon.style.position = "absolute";
                        heartIcon.style.bottom = "0";
                        heartIcon.style.right = "0";
                    
                        
    
                        
                        heartIcon.addEventListener("click", () => {
                            addToFavorites(activity);
                        });

                        // Append elements to activityDiv
                        activityDiv.appendChild(heartIcon);
                        activityDiv.appendChild(activityName);
                        activityDiv.appendChild(activityBookingLink);

    
                        // Determine which div to append the activity to
                        if (i === 0) {
                            picContainer.appendChild(pic1);
                            top_div.appendChild(picContainer);
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            picContainer.appendChild(pic2);
                            mid_div.appendChild(picContainer);
                            mid_div.appendChild(activityDiv);
                        } else {
                            picContainer.appendChild(pic3);
                            bottom_div.appendChild(picContainer);
                            bottom_div.appendChild(activityDiv);
                        }
                    }

                    // Display background image for Barcelona
                    leftside.style.backgroundImage = "url('cities/barecelona.jpg')";

                } else {
                    console.error("No data available or insufficient data.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        else if (city === 'Berlin') {
            try {
                let response = await fetch('http://localhost:3000/tours?latitude=52.541755&longitude=13.354201&radius=5');
                let jsonData = await response.json();
    
                // Filter data to include only objects with name, rating, and bookingLink
                let filteredData = jsonData.data.filter(activity => 
                    activity.id == 7145 || activity.id == 6378382 || activity.id == 6379152
                );
                filteredData.sort((a, b) => a.id - b.id);

                //bike tour (7145) 1st, hightea (6379152) 3rd , white truffel (6378382) 2nd

                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";

                    let pic1 = document.createElement("div");
                    let pic2 = document.createElement("div");
                    let pic3 = document.createElement("div");

                    pic1.style.height = '170px';
                        pic1.style.width = '170px';
                        pic1.style.margin = '15px';
                        pic1.style.borderRadius = '10px';
                        pic1.style.backgroundImage = "url(activities/berlin/BerlinBikeTour.jpg)";
                        pic1.style.backgroundSize = 'cover';
                        pic1.style.backgroundRepeat = 'no-repeats';
                        pic1.style.backgroundPosition = 'center';

                        pic2.style.height = '170px';
                        pic2.style.width = '170px';
                        pic2.style.margin = '15px';
                        pic2.style.borderRadius = '10px';
                        pic2.style.backgroundImage = "url(activities/berlin/whiteTruffel.jpg)";
                        pic2.style.backgroundSize = 'cover';
                        pic2.style.backgroundRepeat = 'no-repeats';
                        pic2.style.backgroundPosition = 'center';

                        pic3.style.height = '170px';
                        pic3.style.width = '170px';
                        pic3.style.margin = '15px';
                        pic3.style.borderRadius = '10px';
                        pic3.style.backgroundImage = "url(activities/berlin/highTea.jpg)";
                        pic3.style.backgroundSize = 'cover';
                        pic3.style.backgroundRepeat = 'no-repeats';
                        pic3.style.backgroundPosition = 'center';
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
                        activity.location = city;
                        activity.city_pic = "cities/berlin.jpg";

                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
                        let picContainer = document.createElement("div");

                        picContainer.style.height = '100%';
                        picContainer.style.width = '200px'
                        activityDiv.style.height = '100%';
                        activityDiv.style.width = '450px';
                        activityDiv.style.textAlign = 'center';
    
                        // Set content for the elements
                        activityName.textContent = activity.name;

                        activityBookingLink.style.textDecoration = 'none';
                        activityBookingLink.style.color= 'grey';

                        activityBookingLink.textContent = "Book Activity Now!";
                        activityBookingLink.href = activity.bookingLink || "#";
                        heartIcon.src = "/icons/heart.png";
                        heartIcon.alt = "";
                        heartIcon.style.width = "7%";
                        heartIcon.style.position = "absolute";
                        heartIcon.style.bottom = "0";
                        heartIcon.style.right = "0";
    
                        heartIcon.addEventListener("click", () => {
                            addToFavorites(activity);
                        });

                        // Append elements to activityDiv
                        activityDiv.appendChild(heartIcon);
                        activityDiv.appendChild(activityName);
                        activityDiv.appendChild(activityBookingLink);
    
                        // Determine which div to append the activity to
                        if (i === 0) {
                            picContainer.appendChild(pic1);
                            top_div.appendChild(picContainer);
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            picContainer.appendChild(pic2);
                            mid_div.appendChild(picContainer);
                            mid_div.appendChild(activityDiv);
                        } else {
                            picContainer.appendChild(pic3);
                            bottom_div.appendChild(picContainer);
                            bottom_div.appendChild(activityDiv);
                        }
                    }

                    // Display background image for Barcelona
                    leftside.style.backgroundImage = "url('cities/berlin.jpg')";

                } else {
                    console.error("No data available or insufficient data.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        else if (city === 'Dallas') {
            try {
                let response = await fetch('http://localhost:3000/tours?latitude=32.806993&longitude=-96.836857&radius=5');
                let jsonData = await response.json();
    
                // Filter data to include only objects with name, rating, and bookingLink
                let filteredData = jsonData.data.filter(activity => 
                    activity.id == 3889687 || activity.id == 3882766 || activity.id == 3934711
                );

                //sporting club(3889687)3rd, maple landing (3882766) 2nd, atipico (3934711) 1st
                // Sort filtered data by number in ascending order
                filteredData.sort((a, b) => b.id - a.id);

                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
                    let pic1 = document.createElement("div");
                    let pic2 = document.createElement("div");
                    let pic3 = document.createElement("div");

                    pic1.style.height = '170px';
                        pic1.style.width = '170px';
                        pic1.style.margin = '15px';
                        pic1.style.borderRadius = '10px';
                        pic1.style.backgroundImage = "url(activities/dallas/Atipico.jpg)";
                        
                        pic1.style.backgroundSize = 'cover';
                        pic1.style.backgroundRepeat = 'no-repeats';
                        pic1.style.backgroundPosition = 'center';
                        pic3.style.backgroundImage = "url(activities/dallas/mapleLanding.jpg)";
                        pic2.style.height = '170px';
                        pic2.style.width = '170px';
                        pic2.style.margin = '15px';
                        pic2.style.borderRadius = '10px';
                        
                        pic2.style.backgroundSize = 'cover';
                        pic2.style.backgroundRepeat = 'no-repeats';
                        pic2.style.backgroundPosition = 'center';
                        pic3.style.height = '170px';
                        pic3.style.width = '170px';
                        pic3.style.margin = '15px';
                        pic3.style.borderRadius = '10px';
                        pic2.style.backgroundImage = "url(activities/dallas/sportsClubD.jpg)";
                        pic3.style.backgroundSize = 'cover';
                        pic3.style.backgroundRepeat = 'no-repeats';
                        pic3.style.backgroundPosition = 'center';
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
                        activity.location = city;
                        activity.city_pic = "cities/dallas.jpg";

                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
                        let picContainer = document.createElement("div");

                        picContainer.style.height = '100%';
                        picContainer.style.width = '200px'
                        activityDiv.style.height = '100%';
                        activityDiv.style.width = '450px';
                        activityDiv.style.textAlign = 'center';
    
                        // Set content for the elements
                        activityName.textContent = activity.name;

                        activityBookingLink.style.textDecoration = 'none';
                        activityBookingLink.style.color= 'grey';

                        activityBookingLink.textContent = "Book Activity Now!";
                        activityBookingLink.href = activity.bookingLink || "#";
                        heartIcon.src = "/icons/heart.png";
                        heartIcon.alt = "";
                        heartIcon.style.width = "7%";
                        heartIcon.style.position = "absolute";
                        heartIcon.style.bottom = "0";
                        heartIcon.style.right = "0";
    
                        heartIcon.addEventListener("click", () => {
                            addToFavorites(activity);
                        });

                        // Append elements to activityDiv
                        activityDiv.appendChild(heartIcon);
                        activityDiv.appendChild(activityName);
                        activityDiv.appendChild(activityBookingLink);
    
                        // Determine which div to append the activity to
                        if (i === 0) {
                            picContainer.appendChild(pic1);
                            top_div.appendChild(picContainer);
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            picContainer.appendChild(pic2);
                            mid_div.appendChild(picContainer);
                            mid_div.appendChild(activityDiv);
                        } else {
                            picContainer.appendChild(pic3);
                            bottom_div.appendChild(picContainer);
                            bottom_div.appendChild(activityDiv);
                        }
                    }

                    // Display background image for Barcelona
                    leftside.style.backgroundImage = "url('cities/dallas.jpg')";

                } else {
                    console.error("No data available or insufficient data.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        } 
        else if (city === 'London') {
            try {
                let response = await fetch('http://localhost:3000/tours?latitude=51.520180&longitude=-0.169882&radius=5');
                let jsonData = await response.json();
    
                // Filter data to include only objects with name, rating, and bookingLink
                let filteredData = jsonData.data.filter(activity => 
                    activity.id == 6378975 || activity.id == 6379424 || activity.id == 6378986
                );

                filteredData.sort((a, b) => a.id - b.id);
                //bush market (6378975), canal boat (6379424), food market (6378986)

                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
    
                    let pic1 = document.createElement("div");
                    let pic2 = document.createElement("div");
                    let pic3 = document.createElement("div");

                    pic1.style.height = '170px';
                        pic1.style.width = '170px';
                        pic1.style.margin = '15px';
                        pic1.style.borderRadius = '10px';
                        pic1.style.backgroundImage = "url(activities/london/bushMarket.jpg)";
                        pic1.style.backgroundSize = 'cover';
                        pic1.style.backgroundRepeat = 'no-repeats';
                        pic1.style.backgroundPosition = 'center';

                        pic2.style.height = '170px';
                        pic2.style.width = '170px';
                        pic2.style.margin = '15px';
                        pic2.style.borderRadius = '10px';
                        pic3.style.backgroundImage = "url(activities/london/canalBoat.jpg)";
                        pic2.style.backgroundSize = 'cover';
                        pic2.style.backgroundRepeat = 'no-repeats';
                        pic2.style.backgroundPosition = 'center';

                        pic3.style.height = '170px';
                        pic3.style.width = '170px';
                        pic3.style.margin = '15px';
                        pic3.style.borderRadius = '10px';
                        pic2.style.backgroundImage = "url(activities/london/Foodmarket.jpg)";
                        pic3.style.backgroundSize = 'cover';
                        pic3.style.backgroundRepeat = 'no-repeats';
                        pic3.style.backgroundPosition = 'center';
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
                        activity.location = city;
                        activity.city_pic = "cities/london.jpg";

                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
                        let picContainer = document.createElement("div");

                        picContainer.style.height = '100%';
                        picContainer.style.width = '200px'
                        activityDiv.style.height = '100%';
                        activityDiv.style.width = '450px';
                        activityDiv.style.textAlign = 'center';
    
                        // Set content for the elements
                        activityName.textContent = activity.name;

                        activityBookingLink.style.textDecoration = 'none';
                        activityBookingLink.style.color= 'grey';

                        activityBookingLink.textContent = "Book Activity Now!";
                        activityBookingLink.href = activity.bookingLink || "#";
                        heartIcon.src = "/icons/heart.png";
                        heartIcon.alt = "";
                        heartIcon.style.width = "7%";
                        heartIcon.style.position = "absolute";
                        heartIcon.style.bottom = "0";
                        heartIcon.style.right = "0";
    
                        heartIcon.addEventListener("click", () => {
                            addToFavorites(activity);
                        });

                        // Append elements to activityDiv
                        activityDiv.appendChild(heartIcon);
                        activityDiv.appendChild(activityName);
                        activityDiv.appendChild(activityBookingLink);
    
                        // Determine which div to append the activity to
                        if (i === 0) {
                            picContainer.appendChild(pic1);
                            top_div.appendChild(picContainer);
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            picContainer.appendChild(pic2);
                            mid_div.appendChild(picContainer);
                            mid_div.appendChild(activityDiv);
                        } else {
                            picContainer.appendChild(pic3);
                            bottom_div.appendChild(picContainer);
                            bottom_div.appendChild(activityDiv);
                        }
                    }

                    // Display background image for Barcelona
                    leftside.style.backgroundImage = "url('cities/london.jpg')";

                } else {
                    console.error("No data available or insufficient data.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        else if (city === 'New York') {
            try {
                let response = await fetch('http://localhost:3000/tours?latitude=40.792027&longitude=-74.058204&radius=5');
                let jsonData = await response.json();
    
                // Filter data to include only objects with name, rating, and bookingLink
                let filteredData = jsonData.data.filter(activity => 
                    activity.id == 3904457 || activity.id == 3935551 || activity.id == 3889676
                );
                //giannas (3904457), manchengo (3935551), snowglobe (3889676)
                filteredData.sort((a, b) => a.id - b.id);
                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
    
                    let pic1 = document.createElement("div");
                    let pic2 = document.createElement("div");
                    let pic3 = document.createElement("div");

                    pic1.style.height = '170px';
                        pic1.style.width = '170px';
                        pic1.style.margin = '15px';
                        pic1.style.borderRadius = '10px';
                        pic2.style.backgroundImage = "url(activities/new_york/giannas.jpg)";
                        pic1.style.backgroundSize = 'cover';
                        pic1.style.backgroundRepeat = 'no-repeats';
                        pic1.style.backgroundPosition = 'center';

                        pic2.style.height = '170px';
                        pic2.style.width = '170px';
                        pic2.style.margin = '15px';
                        pic2.style.borderRadius = '10px';
                        pic3.style.backgroundImage = "url(activities/new_york/manchengo.jpg)";
                        pic2.style.backgroundSize = 'cover';
                        pic2.style.backgroundRepeat = 'no-repeats';
                        pic2.style.backgroundPosition = 'center';

                        pic3.style.height = '170px';
                        pic3.style.width = '170px';
                        pic3.style.margin = '15px';
                        pic3.style.borderRadius = '10px';
                        pic1.style.backgroundImage = "url(activities/new_york/snowGlobe.jpg)";
                        pic3.style.backgroundSize = 'cover';
                        pic3.style.backgroundRepeat = 'no-repeats';
                        pic3.style.backgroundPosition = 'center';
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
                        activity.location = city;
                        activity.city_pic = "cities/newyork.jpg";

                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
                        let picContainer = document.createElement("div");

                        picContainer.style.height = '100%';
                        picContainer.style.width = '200px'
                        activityDiv.style.height = '100%';
                        activityDiv.style.width = '450px';
                        activityDiv.style.textAlign = 'center';
    
                        // Set content for the elements
                        activityName.textContent = activity.name;

                        activityBookingLink.style.textDecoration = 'none';
                        activityBookingLink.style.color= 'grey';

                        activityBookingLink.textContent = "Book Activity Now!";
                        activityBookingLink.href = activity.bookingLink || "#";
                        heartIcon.src = "/icons/heart.png";
                        heartIcon.alt = "";
                        heartIcon.style.width = "7%";
                        heartIcon.style.position = "absolute";
                        heartIcon.style.bottom = "0";
                        heartIcon.style.right = "0";
    
                        heartIcon.addEventListener("click", () => {
                            addToFavorites(activity);
                        });

                        // Append elements to activityDiv
                        activityDiv.appendChild(heartIcon);
                        activityDiv.appendChild(activityName);
                        activityDiv.appendChild(activityBookingLink);
    
                        // Determine which div to append the activity to
                        if (i === 0) {
                            picContainer.appendChild(pic1);
                            top_div.appendChild(picContainer);
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            picContainer.appendChild(pic2);
                            mid_div.appendChild(picContainer);
                            mid_div.appendChild(activityDiv);
                        } else {
                            picContainer.appendChild(pic3);
                            bottom_div.appendChild(picContainer);
                            bottom_div.appendChild(activityDiv);
                        }
                    }

                    // Display background image for Barcelona
                    leftside.style.backgroundImage = "url('cities/newyork.jpg')";

                } else {
                    console.error("No data available or insufficient data.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        else if (city === 'Paris') {
            try {
                let response = await fetch('http://localhost:3000/tours?latitude=48.91&longitude=2.25&radius=5');
                let jsonData = await response.json();
    
                // Filter data to include only objects with name, rating, and bookingLink
                let filteredData = jsonData.data.filter(activity => 
                    activity.id == 1747853 || activity.id == 1747856 || activity.id == 3839961
                );

                filteredData.sort((a, b) => a.id - b.id);
                //beer bike (1747853), bike tour (1747856), defense (3839961)

                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
    
                    let pic1 = document.createElement("div");
                    let pic2 = document.createElement("div");
                    let pic3 = document.createElement("div");

                    pic1.style.height = '170px';
                        pic1.style.width = '170px';
                        pic1.style.margin = '15px';
                        pic1.style.borderRadius = '10px';
                        pic1.style.backgroundImage = "url(activities/paris/beerBike.jpg)";
                        pic1.style.backgroundSize = 'cover';
                        pic1.style.backgroundRepeat = 'no-repeats';
                        pic1.style.backgroundPosition = 'center';

                        pic2.style.height = '170px';
                        pic2.style.width = '170px';
                        pic2.style.margin = '15px';
                        pic2.style.borderRadius = '10px';
                        pic2.style.backgroundImage = "url(activities/paris/bike.jpg)";
                        pic2.style.backgroundSize = 'cover';
                        pic2.style.backgroundRepeat = 'no-repeats';
                        pic2.style.backgroundPosition = 'center';

                        pic3.style.height = '170px';
                        pic3.style.width = '170px';
                        pic3.style.margin = '15px';
                        pic3.style.borderRadius = '10px';
                        pic3.style.backgroundImage = "url(activities/paris/defense.jpg)";
                        pic3.style.backgroundSize = 'cover';
                        pic3.style.backgroundRepeat = 'no-repeats';
                        pic3.style.backgroundPosition = 'center';
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
                        activity.location = city;
                        activity.city_pic = "cities/paris.jpg";

                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
                        let picContainer = document.createElement("div");

                        picContainer.style.height = '100%';
                        picContainer.style.width = '200px'
                        activityDiv.style.height = '100%';
                        activityDiv.style.width = '450px';
                        activityDiv.style.textAlign = 'center';
    
                        // Set content for the elements
                        activityName.textContent = activity.name;

                        activityBookingLink.style.textDecoration = 'none';
                        activityBookingLink.style.color= 'grey';

                        activityBookingLink.textContent = "Book Activity Now!";
                        activityBookingLink.href = activity.bookingLink || "#";
                        heartIcon.src = "/icons/heart.png";
                        heartIcon.alt = "";
                        heartIcon.style.width = "7%";
                        heartIcon.style.position = "absolute";
                        heartIcon.style.bottom = "0";
                        heartIcon.style.right = "0";
    
                        heartIcon.addEventListener("click", () => {
                            addToFavorites(activity);
                        });

                        // Append elements to activityDiv
                        activityDiv.appendChild(heartIcon);
                        activityDiv.appendChild(activityName);
                        activityDiv.appendChild(activityBookingLink);
    
                        // Determine which div to append the activity to
                        if (i === 0) {
                            picContainer.appendChild(pic1);
                            top_div.appendChild(picContainer);
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            picContainer.appendChild(pic2);
                            mid_div.appendChild(picContainer);
                            mid_div.appendChild(activityDiv);
                        } else {
                            picContainer.appendChild(pic3);
                            bottom_div.appendChild(picContainer);
                            bottom_div.appendChild(activityDiv);
                        }
                    }

                    // Display background image for Barcelona
                    leftside.style.backgroundImage = "url('cities/paris.jpg')";

                } else {
                    console.error("No data available or insufficient data.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        else if (city === 'San Francisco') {
            try {
                let response = await fetch('http://localhost:3000/tours?latitude=37.810980&longitude=-122.483716&radius=5');
                let jsonData = await response.json();
    
                // Filter data to include only objects with name and bookingLink
                let filteredData = jsonData.data.filter(activity => 
                    activity.id == 3908226 || activity.id == 3836619 || activity.id == 3852638
                );

                filteredData.sort((a, b) => a.id - b.id);

                //camp bbq(3908226) , greens(3836619), sessions(3852638)
                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
    
                    let pic1 = document.createElement("div");
                    let pic2 = document.createElement("div");
                    let pic3 = document.createElement("div");

                    pic1.style.height = '170px';
                        pic1.style.width = '170px';
                        pic1.style.margin = '15px';
                        pic1.style.borderRadius = '10px';
                        pic3.style.backgroundImage = "url(activities/san_fransico/BBQ.jpg)";
                        pic1.style.backgroundSize = 'cover';
                        pic1.style.backgroundRepeat = 'no-repeats';
                        pic1.style.backgroundPosition = 'center';

                        pic2.style.height = '170px';
                        pic2.style.width = '170px';
                        pic2.style.margin = '15px';
                        pic2.style.borderRadius = '10px';
                        pic1.style.backgroundImage = "url(activities/san_fransico/greens.jpg)";
                        pic2.style.backgroundSize = 'cover';
                        pic2.style.backgroundRepeat = 'no-repeats';
                        pic2.style.backgroundPosition = 'center';

                        pic3.style.height = '170px';
                        pic3.style.width = '170px';
                        pic3.style.margin = '15px';
                        pic3.style.borderRadius = '10px';
                        pic2.style.backgroundImage = "url(activities/san_fransico/sessions.jpg)";
                        pic3.style.backgroundSize = 'cover';
                        pic3.style.backgroundRepeat = 'no-repeats';
                        pic3.style.backgroundPosition = 'center';
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
                        activity.location = city;
                        activity.city_pic = "cities/sanfrancisco.jpg";

                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
                        let picContainer = document.createElement("div");

                        picContainer.style.height = '100%';
                        picContainer.style.width = '200px'
                        activityDiv.style.height = '100%';
                        activityDiv.style.width = '450px';
                        activityDiv.style.textAlign = 'center';
    
                        // Set content for the elements
                        activityName.textContent = activity.name;

                        activityBookingLink.style.textDecoration = 'none';
                        activityBookingLink.style.color= 'grey';

                        activityBookingLink.textContent = "Book Activity Now!";
                        activityBookingLink.href = activity.bookingLink || "#";
                        heartIcon.src = "/icons/heart.png";
                        heartIcon.alt = "";
                        heartIcon.style.width = "7%";
                        heartIcon.style.position = "absolute";
                        heartIcon.style.bottom = "0";
                        heartIcon.style.right = "0";
    
                        heartIcon.addEventListener("click", () => {
                            addToFavorites(activity);
                        });

                        // Append elements to activityDiv
                        activityDiv.appendChild(heartIcon);
                        activityDiv.appendChild(activityName);
                        activityDiv.appendChild(activityBookingLink);
    
                        // Determine which div to append the activity to
                        if (i === 0) {
                            picContainer.appendChild(pic1);
                            top_div.appendChild(picContainer);
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            picContainer.appendChild(pic2);
                            mid_div.appendChild(picContainer);
                            mid_div.appendChild(activityDiv);
                        } else {
                            picContainer.appendChild(pic3);
                            bottom_div.appendChild(picContainer);
                            bottom_div.appendChild(activityDiv);
                        }
                    }

                    // Display background image for Barcelona
                    leftside.style.backgroundImage = "url('cities/sanfrancisco.jpg')";

                } else {
                    console.error("No data available or insufficient data.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        else if(city === "Home"){
            this.location.reload();
        }
    });       
});

async function addToFavorites(attraction, event) {
    try {
        let userId = localStorage.getItem('userId');
        // Send a POST request to your backend to add the attraction to favorites
        const response = await fetch('http://localhost:3000/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location: attraction.location, 
                activityId: attraction.id,
                userId: userId ,
                activityName: attraction.name,
                city_pic: attraction.city_pic
            })
        });
        
        // Check if the request was successful
        if (response.ok) {
            console.log('Attraction added to favorites successfully.');
            event.preventDefault();

        } else {
            console.error('Error adding attraction to favorites:', response.statusText);
        }
    } catch (error) {
        console.error('Error adding attraction to favorites:', error);
    }
}