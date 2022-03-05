import React from 'react';
import {CommentType} from "../../../../types/Types";
import {AiOutlineSmile} from "react-icons/ai";

type Props = {
    findComments: Array<CommentType>
    setName: (value: string) => void
    name: string
    setEmail: (value: string) => void
    email: string
    setText: (value: string) => void
    text: string
    addedComment: () => void
}

const Comments = ({findComments, setName, name, setEmail, email, setText, text, addedComment}: Props) => {

    if (findComments) {
        return (
            <div className='wrapper--comments'>
                <div>
                    <h3>Количество комментариев: {findComments.length}</h3>
                </div>
                <div>
                    {findComments.map(({name, text, idPerson}) => <div key={idPerson} className='item__showComments'>
                        <AiOutlineSmile size='50px'/>
                        <div className='showComments__items'>
                            <h4>{name}</h4>
                            <span>{text}</span>
                        </div>
                    </div>)}
                </div>
                <div className='item__addComment'>
                    <h3>Добавить комментарий</h3>
                    <div className='addComment__input'>
                        <div className='addComment__upInput'>
                            <div className='upInput__name'>
                                <label htmlFor='name'>Имя*</label>
                                <input
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    autoComplete='off'
                                    type="text"
                                    id='name'/>
                            </div>
                            <div className='upInput__email'>
                                <label htmlFor='email'>Email* </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    type="email"
                                    id='email'/>
                            </div>
                        </div>
                        <div className='addComment__textarea'>
                            <label htmlFor="comment">Комментарий </label>
                            <textarea
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                                spellCheck='true'
                                id='comment'/>
                        </div>
                        <button onClick={() => addedComment()}>
                            Отправить комментарий
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h3>Комментариев нет. Будьте первым!</h3>
        </div>
    );
};

export default Comments;