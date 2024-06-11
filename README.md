# belly-button-challenge

The goal of this project is to create an interactive dashboard to visualize microbes colonizing subject belly buttons. Through the completed app, the user will be able to explore the sample dataset through a dropdown menu of each subject sample. The dropdown sample selected will show the sample's demographic information, a bubble chart describing the count and type of bacteria present, and a bar chart displaying the top 10 bacteria types found. 


<img width="663" alt="Screenshot 2024-06-10 at 5 06 50 PM" src="https://github.com/zoejbennett/belly-button-challenge/assets/157840347/78961e6c-285d-4005-a84c-848299c99d5f">

Execution: 
The app is built through the development of four main functions:

**buildMetadata( )**: Extracts the data from a sample json file using the javascript library D3. The function creates individual objects for each sample and uses a loop to create key-value pairs representing the demographic information of each sample.


**buildCharts( )**: Constructs the charts for the app. First filters the samples for the object with the intended sample number, extracting the bacteria (OTUs) IDs, labels, and sample values. The bubble chart is built through the constructed variables bubbledata and bubblelayout. This chart displays the quantity and type of all OTUs discovered in the sample. The bar chart is built with the variables barChart and barChartLayout, displaying the quantity of the top 10 bacteria found in each sample.

**init( )**: Creates and initializes the dropdown menu, allowing users to choose the sample they want to visualize the data from. 

**optionChanged( )**: Builds a new dashboard everytime the user wants to change the selected sample from the dropdown menu. 

The final app can be  found at this link: https://zoejbennett.github.io/belly-button-challenge/ 

I utilized help from stack overflow and the UC Berkeley tutor Justin Moore in completing this project.
