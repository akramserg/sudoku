import { solveGreedy, isBoardValid, solveBrutefoce } from "./helpers/solveBoardFunctions"

const handler = (req, res) => {
  if (req.method === 'POST') {
    // console.log(req.body)
    const board = req.body.board
    const algorithm = req.body.algorithm

    const isVlaid = isBoardValid(board)
    if (!isVlaid)
      return res.status(200).json({ board: board, success: false, message: "Board is not valid" })

    const d = new Date(); //START TIME
    const newBoard = algorithm === "greedy" ? solveGreedy(board) : solveBrutefoce(board)
    const timeTaken = new Date().getTime() - d.getTime();

    if (newBoard)
      return res.status(200).json({ board: newBoard, success: true, message: `Managed to find a solution using ${algorithm ? algorithm : "Brute Force"} in  ${timeTaken}  milliseconds.` })
    else
      return res.status(200).json({ board: null, success: false, message: "Sorry, there is no solution for this board!" })

  }

  return res.status(404)

}

export default handler
