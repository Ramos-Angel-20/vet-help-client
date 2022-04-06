import { useCallback, useReducer } from 'react';

type Todo = {
    completed: boolean;
    id: number
    title: string;
    userId: number;
};

interface ITodosState {
    todos: Todo[] | [];
    loading: boolean;
    errorMessage: string;
}

type TodosActions = { 
    type: 'START',
    payload: {
        loading: boolean
    } 
} | {
    type: 'FINISHED',
    payload: {
        loading: boolean,
        todos: Todo[] | []
    }
} | {
    type: 'ERROR',
    payload: {
        loading: boolean,
        errorMessage: string
    }
}
    


const todosReducer = (state: ITodosState, action: TodosActions): ITodosState => {
    if (action.type === 'START') {
        return {
            ...state,
            loading: action.payload.loading
        };
    }

    if (action.type === 'FINISHED') {
        return {
            ...state,
            loading: action.payload.loading,
            todos: action.payload.todos
        };
    }

    if (action.type === 'ERROR') {
        return {
            ...state,
            loading: action.payload.loading,
            errorMessage: action.payload.errorMessage
        };
    }

    return state;
};

const todosInitialState: ITodosState = {
    todos: [],
    loading: false,
    errorMessage: ''
};

const useTodos = () => {


    const [todosState, dispatch] = useReducer(todosReducer, todosInitialState);

    const getTodos = useCallback(async () => {
        try {
            dispatch({type: 'START', payload: {
                loading: false
            }});

            const result = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data: Todo[] = await result.json();

            if (!result.ok) {
                throw new Error('An error ocurred while fetching the data');
            }

            dispatch({type: 'FINISHED', payload: {
                loading: false,
                todos: data
            }});
            
        } catch (err) {
            if (err instanceof Error) {
                dispatch({type: 'ERROR', payload: {
                    loading: false,
                    errorMessage: err.message
                }});
            }
        }
    }, []);
    
    return {
        ...todosState,
        getTodos
    };

}

export default useTodos;