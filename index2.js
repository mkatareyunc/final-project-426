document.addEventListener("DOMContentLoaded", async function() {
    const select_city = document.getElementById("Location");
    const top_div = document.getElementById("topbox");
    const mid_div = document.getElementById("middlebox");
    const bottom_div = document.getElementById("bottombox");

    // Event listener for city selection
    select_city.addEventListener("change", async () => {
        let city = select_city.value;
    
        if (city === 'Barcelona') {
            try {
                let response = await fetch('http://localhost:3000/tours?longitude=2.11&latitude=41.42&radius=2');
                let jsonData = await response.json();
    
                // Check if data is available
                if (jsonData && jsonData.data && jsonData.data.length >= 3) {
                    // Clear previous content
                    top_div.innerHTML = "";
                    mid_div.innerHTML = "";
                    bottom_div.innerHTML = "";
    
                    // Iterate through the first three activities and populate the divs
                    for (let i = 0; i < 3; i++) {
                        let activity = jsonData.data[i];
    
                        // Create elements for the activity
                        let activityDiv = document.createElement("div");
                        let activityName = document.createElement("h1");
                        let activityDescription = document.createElement("p");
                        let activityBookingLink = document.createElement("a");
                        let activityImage = document.createElement("img");
    
                        // Set content for the elements
                        activityName.textContent = activity.name;
                        activityDescription.textContent = activity.shortDescription || activity.description || "";
                        activityBookingLink.textContent = "Book Now";
                        activityBookingLink.href = activity.bookingLink || "#";
                        activityImage.src = activity.pictures[0] || "";
    
                        // Append elements to activityDiv
                        activityDiv.appendChild(activityImage);
                        activityDiv.appendChild(activityName);
                        activityDiv.appendChild(activityDescription);
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
                } else {
                    console.error("No data available or insufficient data.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    });        
});

