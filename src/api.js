const API_ROOT = 'https://multipass-backend.herokuapp.com'
//need to change when we go to heroku

const token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type":"application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

const createUserScore = (userScoreData) => {
  return fetch(`${API_ROOT}/user_scores`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({user_score: userScoreData})
  }).then(res => res.json())
}

const createUser = (data) => {
  return fetch(`${API_ROOT}/users`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({user: data})
  }).then(res => res.json());
};

const getQuizzes = () => {
    return fetch(`${API_ROOT}/quizzes`, {headers: headers()})
    .then(response => response.json())
}

const getPopularQuizzes = () => {
  return fetch(`${API_ROOT}/popular`, {header: headers()})
  .then(response => response.json())
}

const getQuiz = (quiz_id) => {
  return fetch(`${API_ROOT}/quizzes/${quiz_id}`, {headers: headers()})
  .then(response => response.json())
}

const createQuiz = (newQuiz) => {
  return fetch(`${API_ROOT}/quizzes`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({quiz: newQuiz})
  }).then(res => res.json());
}

const getUserScoresByUser = (user_id) => {
    return fetch(`${API_ROOT}/user_scores/users/${user_id}`, {headers: headers()})
    .then(response => response.json())
}

const getUserScoresByQuiz = (quiz_id) => {
  return fetch(`${API_ROOT}/user_scores/quizzes/${quiz_id}`, {headers: headers()}).then(response => response.json())
}

const login = data => {
  return fetch(`${API_ROOT}/auth`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({user: data})
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers()
  }).then(res => {
    return res.json();
  });
};

export const api = {
  auth: {
    login,
    getCurrentUser
  },
  user: {
    createUser
  },
  quizzes: {
    getQuiz,
    getQuizzes,
    getPopularQuizzes,
    createQuiz
  },
  scores: {
      getUserScoresByQuiz,
      getUserScoresByUser
  },
  userScores: {
    createUserScore
  }
};
