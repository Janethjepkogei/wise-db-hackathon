import request from '@/services/common.service.js'

const baseUrl = 'https://dollarwise.eastus.cloudapp.azure.com:8090/quiz'

function getQuizCategories() {
    return request.get(baseUrl + '/category');
}

export const quizService = {
    getQuizCategories
}