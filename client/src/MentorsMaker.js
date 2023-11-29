import fs from 'fs-extra';
import { faker } from '@faker-js/faker';// const AvatarGenerator = require('random-avatar-generator')
import { AvatarGenerator } from 'random-avatar-generator';


// Function to create a JSON file of random mentors with avatars
function createRandomMentorsJson(numMentors) {
    const generator = new AvatarGenerator();
// Simply get a random avatar

    const mentors = Array.from({ length: numMentors }, (_, index) => ({
        id: index + 1,
        name: faker.name,
        profession: faker.profession,
        email: faker.email,
        phone: faker.phone,
        location: faker.location,
        avatar: generator.generateRandomAvatar(),
    }));

    const mentorsData = JSON.stringify(mentors, null, 2);

    fs.writeJson('mentors.json', mentorsData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
        } else {
            console.log('mentors.json file created successfully!');
        }
    });
}

// Specify the number of random mentors you want to generate
const numberOfMentors = 10;

// Call the function with the specified number of random mentors
// createRandomMentorsJson(numberOfMentors);
export default createRandomMentorsJson;