export const mockUseRouter = jest.fn(() => { }) //USED TO MEASURE HOW MANY TIMES GETS CALLED
export const mockRouter = jest.fn((args) => { console.log(args) })

export const useRouter = () => {
    mockUseRouter();
    return {
        push: (args) => {
            mockRouter(args)
        }
    }

}