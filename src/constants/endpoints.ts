const HOST = 'https://rateformserver.herokuapp.com';

const endpoints = {
    createComment: `${HOST}/createFeedback`,
    getComments: `${HOST}/getFeedbacks`
}

export default endpoints;