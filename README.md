# VALORANT Esports Assistant

A digital assistant that helps in scouting and recruitment for VALORANT Esports teams using Amazon Bedrock and S3 services. The assistant fetches data, processes user queries, and provides insights on players and teams.

## Features

- **Interactive Chat Interface**: Users can ask questions about VALORANT esports players, teams, and other information.
- **AWS Bedrock Integration**: Powered by Amazon Bedrock's generative AI capabilities for understanding user queries and providing relevant responses.
- **S3 Integration**: Fetches player data from AWS S3 for real-time analysis.
- **Responsive Design**: Built with Tailwind CSS to offer a clean and responsive user interface.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- AWS Account with S3 and Bedrock access

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/valorant-esports-assistant.git
cd valorant-esports-assistant
```

### 2. Install Dependencies

```bash
npm install
```

### 3. AWS Configuration

Make sure to configure your AWS credentials. You can do this by using the AWS CLI or setting environment variables directly.

```bash
aws configure
```

### 4. Set Up S3

Upload your data files (like player stats) to an S3 bucket. Ensure that you update the `getS3Object` function in `index.js` with your bucket name and file paths.

### 5. Run the Backend

Start the Node.js backend to handle user queries and interact with AWS services.

```bash
node index.js
```

### 6. Run the Frontend

Simply open the `index.html` file in a browser to start using the chat interface. You can use **live-server** or any static file server to host it locally.

### Example

To ask the assistant about players or teams:

1. Type your query into the chat box.
2. Click "Send."
3. Wait for the assistant's response based on the data retrieved from S3 and processed by Bedrock.

## Technologies Used

- **Node.js**: Backend runtime for executing JavaScript code.
- **AWS SDK**: For interacting with Amazon S3 and Bedrock services.
- **Amazon Bedrock**: Provides generative AI capabilities for natural language understanding.
- **Tailwind CSS**: For building a responsive and clean frontend design.
- **HTML/CSS**: Standard web technologies for the frontend interface.

## Project Structure

```plaintext
valiant-assistant/
│
├── index.html           # Frontend HTML file with chat interface
├── styles.css           # Custom styling (Tailwind CSS included via CDN)
├── app.js               # JavaScript for handling user input and fetching responses
├── index.js             # Backend Node.js script for interacting with AWS services
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## Future Enhancements

- **Player Data Expansion**: Support for detailed player performance analytics.
- **Real-Time Data**: Integrate real-time esports stats from official VALORANT APIs.
- **User Authentication**: Add user accounts and personalized recommendations.
- **Cloud Deployment**: Deploy the backend using AWS Lambda or EC2 and host the frontend on platforms like Netlify.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or contributions, feel free to reach out:

- **Email**: sparshsharma1409@gmail.com
- **GitHub**: [Mrshelby0](https://github.com/Mrshelby0)
