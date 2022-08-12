export const state = {
    board: Array.from({ length: 81 }, () => Math.floor(Math.random() * 10)), //NEW RANDOM BOARD
    message: "new message"
}

export const mockUseSelector = jest.fn(() => { }) //USED TO MEASURE HOW MANY TIMES GETS CALLED

export const useSelector = (callback) => {
    mockUseSelector();
    return callback(state)
}

