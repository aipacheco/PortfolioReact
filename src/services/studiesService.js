const URL = import.meta.env.VITE_BACKEND_URL + "/studies"

export const GetStudies = async () => {
    try {
      const response = await fetch(`${URL}`)
      const data = await response.json()
      if (!data.success) {
        throw new Error(data.message)
      }
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
