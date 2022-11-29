import connectDB from '../../util/mongo'
import User from '../../models/User'
import { hash } from 'bcryptjs'

export default async function handler(req, res) {
  await connectDB()

  if (req.method === 'POST') {
    // Extract the required data from the body
    const { username, email, password } = req.body

    // check if user already exists
    const userExists = await User.exists({ email })
    if (userExists)
      return res.status(422).send({ message: 'User with email already exists' })

    // check if username is already taken already exists
    const duplicateUsername = await User.exists({ username })
    if (duplicateUsername)
      return res.status(422).send({ message: 'Username already in use' })

    const user = await User.create({
      username,
      email,
      password: await hash(password, 14),
      auth_type: 'credentials',
    })

    return res.status(200).json(user)
  }
}
