import { UsersMock } from 'Assets/Mocks'

const getAllUsers = async (page: number, itemsPerPage: number) => {
  return [...UsersMock].slice((page - 1) * itemsPerPage, page * itemsPerPage)
}

const getUserById = async (id: string) => {
  return [...UsersMock].find((item) => item._id === id)
}

export const UserAPI = {
  getAllUsers,
  getUserById,
}
