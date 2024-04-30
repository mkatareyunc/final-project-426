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
                    activity.name && activity.bookingLink
                );

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
    
                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
                        let picContainer = document.createElement("div");
                        
                        
                        // .picBox1{
                        //     width: 170px;
                        //     height: 170px;
                        //     margin: 2.25%;
                        //     border-radius: 10px;
                        //     background-image: url(eat.jpg);
                        //     background-size: cover;
                        //     background-repeat: no-repeat;
                        //     background-position: center;
                        // }

                        picContainer.style.height = '100%';
                        picContainer.style.width = '200px'
                        activityDiv.style.height = '100%';
                        activityDiv.style.width = '450px';
                        activityDiv.style.textAlign = 'center';
                        // Set content for the elements
                        activityName.textContent = activity.name;

                        // Add Pictures
                        



                        activityBookingLink.textContent = "Book Activity Now!";
                        activityBookingLink.href = activity.bookingLink || "#";
                        

                        heartIcon.src = "/icons/heart.png";
                        heartIcon.alt = "";
                        heartIcon.style.width = "7%";
                        heartIcon.style.position = "absolute";
                        heartIcon.style.bottom = "0";
                        heartIcon.style.right = "0";
                    
                        activityBookingLink.style.textDecoration = 'none';
                        activityBookingLink.style.color= 'grey';
    
                        
                        heartIcon.addEventListener("click", () => {
                            addToFavorites(activity);
                        });

                        // Append elements to activityDiv
                        activityDiv.appendChild(heartIcon);
                        activityDiv.appendChild(activityName);
                        activityDiv.appendChild(activityBookingLink);

                        

                       // activityDiv.style.textAlign = 'center';
    
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
                    // top_div.style.textAlign = 'center';
                    // mid_div.style.textAlign = 'center';
                    // bottom_div.style.textAlign = 'center';

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
                    activity.name && activity.bookingLink
                );

                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
    
                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
    
                        // Set content for the elements
                        activityName.textContent = activity.name;
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
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            mid_div.appendChild(activityDiv);
                        } else {
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
                    activity.name && activity.bookingLink
                );

                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
    
                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
    
                        // Set content for the elements
                        activityName.textContent = activity.name;
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
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            mid_div.appendChild(activityDiv);
                        } else {
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
                    activity.name && activity.bookingLink
                );

                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
    
                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
    
                        // Set content for the elements
                        activityName.textContent = activity.name;
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
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            mid_div.appendChild(activityDiv);
                        } else {
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
        else if (city === 'Dallas') {
            try {
                let response = await fetch('http://localhost:3000/tours?latitude=32.806993&longitude=-96.836857&radius=5');
                let jsonData = await response.json();
    
                // Filter data to include only objects with name, rating, and bookingLink
                let filteredData = jsonData.data.filter(activity => 
                    activity.name && activity.bookingLink
                );

                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
    
                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
    
                        // Set content for the elements
                        activityName.textContent = activity.name;
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
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            mid_div.appendChild(activityDiv);
                        } else {
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
        else if (city === 'New York') {
            try {
                let response = await fetch('http://localhost:3000/tours?latitude=40.792027&longitude=-74.058204&radius=5');
                let jsonData = await response.json();
    
                // Filter data to include only objects with name, rating, and bookingLink
                let filteredData = jsonData.data.filter(activity => 
                    activity.name && activity.bookingLink
                );

                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
    
                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
    
                        // Set content for the elements
                        activityName.textContent = activity.name;
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
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            mid_div.appendChild(activityDiv);
                        } else {
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
                    activity.name && activity.bookingLink
                );

                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
    
                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
    
                        // Set content for the elements
                        activityName.textContent = activity.name;
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
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            mid_div.appendChild(activityDiv);
                        } else {
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
                    activity.name && activity.bookingLink
                );

                // Check if filtered data is available
                if (filteredData && filteredData.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = filteredData[i];
    
                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityBookingLink = document.createElement("a");
                        let heartIcon = document.createElement("img");
    
                        // Set content for the elements
                        activityName.textContent = activity.name;
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
                            top_div.appendChild(activityDiv);
                        } else if (i === 1) {
                            mid_div.appendChild(activityDiv);
                        } else {
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

async function addToFavorites(attraction) {
    try {
        let userId = localStorage.getItem('userId');
        // Send a POST request to your backend to add the attraction to favorites
        const response = await fetch('http://localhost:3000/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                latitude: attraction.latitude,
                ongitude: attraction.longitude, 
                activityId: attraction.id,
                userId: userId 
            })
        });
        
        // Check if the request was successful
        if (response.ok) {
            console.log('Attraction added to favorites successfully.');
        } else {
            console.error('Error adding attraction to favorites:', response.statusText);
        }
    } catch (error) {
        console.error('Error adding attraction to favorites:', error);
    }
}