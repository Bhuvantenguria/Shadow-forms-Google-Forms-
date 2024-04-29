import React, { useState, useEffect } from 'react';
import '../Styles/QuestionForm.css';

import uuid from 'react-uuid';

import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubjectIcon from '@mui/icons-material/Subject';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsTrash } from 'react-icons/bs';
import { IconButton, Typography } from '@mui/material';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import { BsFileText } from 'react-icons/bs';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { FcRightUp } from 'react-icons/fc';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function QuestionForm() {
    const droppable = uuid();
    const [questions, setQuestions] = useState([
        {
            questionType: 'radio',
            questionText: 'Select Your Fav Anime :- ',
            options: [
                { optionText: 'DragonBall' },
                { optionText: 'Bleach' },
                { optionText: 'One Piece' },
                { optionText: 'Scissor Seven' },
            ],
            open: true,
            required: false,
            answer: false,
            answerkey: '',
            points: 0,
        },
    ]);

    function setOptionsAnswer(ans, qno) {
        var Questions = [...questions];
        Questions[qno].answerkey = ans;
        setQuestions(Questions);
    }

    function setoptionsPoints(points, qno) {
        var Questions = [...questions];
        Questions[qno].points = points;
        setQuestions(Questions);
    }

    function doneAnswer(i) {
        var answer = [...questions];
        answer[i].answer = !answer[i].answer;
        setQuestions(answer);
    }

    function addAnswer(i) {
        var answer = [...questions];
        answer[i].answer = !answer[i].answer;
        setQuestions(answer);
    }

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        var itemgg = [...questions];
        const itemF = reorder(itemgg, result.source.index, result.destination.index);
        setQuestions(itemF);
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [remove] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, remove);
        return result;
    };

    function addOption(i) {
        var aot = [...questions];
        if (aot[i].options.length < 5) {
            aot[i].options.push({ optionText: 'option' + (aot[i].options.length + 1) });
            setQuestions(aot);
        } else {
            console.log('Max 5 limited');
        }
    }

    function copyQuestion(i) {
        expandCloseAll();
        var qstn = [...questions];
        let newq = { ...qstn[i] };
        setQuestions([...questions, newq]);
    }

    function RequiredQuestion(i) {
        var reques = [...questions];
        reques[i].required = !reques[i].required;
        setQuestions(reques);
    }

    function changeQuestion(text, i) {
        var newquestion = [...questions];
        newquestion[i].questionText = text;
        setQuestions(newquestion);
    }

    function addQuestionType(i, type) {
        var qt = [...questions];
        qt[i].questionType = type;
        setQuestions(qt);
    }

    function changeOptionValue(text, i, j) {
        var qst = [...questions];
        qst[i].options[j].optionText = text;
        setQuestions(qst);
    }

    function deleteQuestion(i) {
        var remove = [...questions];
        if (questions.length > 1) {
            remove.splice(i, 1);
        }
        setQuestions(remove);
    }

    function removeOptions(i, j) {
        var re = [...questions];
        if (re[i].options.length > 1) {
            re[i].options.splice(j, 1);
            setQuestions(re);
        }
    }

    function addMoreQuestion() {
        expandCloseAll();
        setQuestions([
            ...questions,
            {
                questionType: 'radio',
                questionText: 'Question ',
                options: [{ optionText: 'Option 1' }],
                open: true,
                required: false,
            },
        ]);
    }
    function expandCloseAll() {
        let qs = [...questions];

        for (let j = 0; j < qs.length; j++) {
            qs[j].open = false;
        }

        setQuestions(qs);
    }

    function handleExpand(i) {
        let qs = [...questions];

        for (let j = 0; j < qs.length; j++) {
            if (i === j) {
                qs[i].open = true;
            } else {
                qs[j].open = false;
            }
        }

        setQuestions(qs);
    }

    function questionUI() {
        return questions.map((ques, i) => (
            <Draggable key={i} draggableId={i + 'id'} index={i}>
                {(provided, snapshot) => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <div>
                            <div style={{ marginBottom: '0px' }}>
                                <div style={{ width: '100%', marginBottom: '0px' }}>
                                    <DragIndicatorIcon style={{ transform: 'rotate(-90deg)', color: '#DAE0E2', position: 'relative', left: '300px' }} fontSize='small' />
                                </div>
                                <Accordion key={i} expanded={ques.open} className={ques.open ? 'add_border' : ''} onChange={() => { handleExpand(i) }}>
                                    <AccordionSummary aria-controls='panel1a-content' id='panel1a-header' elevation={1} style={{ width: '100%' }}>
                                        {!ques.open && (
                                            <div className='saved_question'>
                                                <Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px', paddingBottom: '8px' }}>
                                                    {i + 1}. {ques.questionText}
                                                </Typography>
                                                {ques.options.map((op, j) => (
                                                    <div key={j}>
                                                        <div style={{ display: 'flex' }}>
                                                            <FormControlLabel
                                                                disabled
                                                                control={<input type={ques.questionType} color='primary' required={ques.required} />}
                                                                label={<Typography>{op.optionText}</Typography>} // Ensure Typography is nested inside label prop
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                    </AccordionSummary>
                                    <div className='question-boxes' >
                                    {questions[i].answer ?(
                                    <AccordionDetails className='add_questions'>
                                        <div className='add_question_top'>
                                            <input type='text' className='question' placeholder='question' value={ques.questionText} onChange={(e) => changeQuestion(e.target.value, i)} />
                                            <CropOriginalIcon />
                                            <Select className='select' onChange={(e) => addQuestionType(i, e.target.value)}>
                                                <MenuItem value='text'>
                                                    
                                                    <SubjectIcon /> Paragraph
                                                </MenuItem>
                                                <MenuItem value='checkbox'>
                                                    
                                                    <CheckBoxIcon /> Checkbox
                                                </MenuItem>
                                                <MenuItem value='radio'>
                                                    
                                                    <Radio checked /> Multiple Choices
                                                </MenuItem>
                                            </Select>
                                        </div>
                                        {ques.options.map((op, j) => (
                                            <div className='add_question_body' key={j}>
                                                {ques.questionType !== 'text' ? <input type={ques.questionType} /> : <ShortTextIcon />}
                                                <div>
                                                    <input type='text' className='text_input' placeholder='option' value={ques.options[j].optionText} onChange={(e) => changeOptionValue(e.target.value, i, j)} />
                                                </div>
                                                <CropOriginalIcon />
                                                <IconButton>
                                                    <CloseIcon onClick={() => removeOptions(i, j)} />
                                                </IconButton>
                                            </div>
                                        ))}
                                        {ques.options.length < 5 ? (
                                            <div className='add_question_body'>
                                                <FormControlLabel
                                                    disabled
                                                    control={
                                                        ques.questionType === 'text' ? (
                                                            <input
                                                                type={ques.questionType}
                                                                color='primary'
                                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                                disabled
                                                            />
                                                        ) : (
                                                            <ShortTextIcon style={{ marginRight: '10px' }} />
                                                        )
                                                    }
                                                    label={
                                                        <div>
                                                            <input type='text' className='text_input' style={{ fontSize: '13px', width: '60px' }} placeholder='Add other' />
                                                            <Button
                                                                size='small'
                                                                style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}
                                                                onClick={() => addOption(i)}
                                                            >
                                                                Add Option
                                                            </Button>
                                                        </div>
                                                    }
                                                />
                                            </div>
                                        ) : ""}
                                        <div className='add_footer'>
                                            <div className='add_question_button_left'>
                                                <Button size='small' onClick={() => {addAnswer(i)}}>
                                                    <FcRightUp /> Answer Key
                                                </Button>
                                            </div>
                                            <div className='add_question_bottom'>
                                                <IconButton aria-label='copy' onClick={() => copyQuestion(i)}>
                                                    <FilterNoneIcon />
                                                </IconButton>
                                                <IconButton onClick={() => deleteQuestion(i)}>
                                                    <BsTrash />
                                                </IconButton>
                                                <span>Required</span> <Switch color='primary' onClick={() => RequiredQuestion(i)} />
                                                <IconButton>
                                                    <MoreVertIcon />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </AccordionDetails>) :(
                                    <AccordionDetails className='add_questions'>
                                        <div className='top_Header'>
                                            Choose Correct Answer
                                        </div>
                                        <div>
                                        <div className='add_question_top'>
                                            <input type='text' className='question' placeholder='question' value={ques.questionText} disabled />
                                            <input type="number" className='points' min={1} step={0} placeholder='0' 
                                                onChange={(e) => {setoptionsPoints(e.target.value,i)}} />
                                        </div>
                                        {ques.options.map((op, j) => (
                                            <div className='add_question_body' key={j}>
                                                <div key={j}>
                                                    <div style={{display:'flex'}} className=''>
                                                        <div className='form_check'>
                                                            <label style={{fontSize:"13px"}} onChange={(e) => {setOptionsAnswer(ques.options[j].optionText,i)}}>
                                                                {(ques.questionType!="text") ? 
                                                                < input type = {ques.questionType} name={ques.questionText} value='option3' 
                                                                className='form-check-input' required = {ques.required} 
                                                                style={{marginRight:"10px" , marginBottom:"10px" , marginTop:"5px"}}/> : 
                                                                <ShortTextIcon style={{marginRight:"10px"}} /> }
                                                                {ques.options[j].optionText}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className='add_question_body'>
                                            <Button size='small' style={{textTransform:"none" , color:"#4285f4", fontSize:"13px" , fontWeight:"600"}} >
                                                <BsFileText style={{fontSize : "20px" , marginRight:"8px"}} /> Add Answer Feedback
                                            </Button>
                                        </div>
                                        <div className='add_question_bottom'>
                                            <Button variant='outlined' color='primary' onClick={() => {doneAnswer(i)}} >Done</Button>
                                        </div>
                                       </div>
                                    </AccordionDetails>)} 
                                    </div>
                                    {!ques.answer ? (<div className='question_edit'>
                                        <AddCircleOutlineIcon onClick={() => addMoreQuestion()} className='edit' />
                                        <OndemandVideoIcon className='edit' />
                                        <CropOriginalIcon className='edit' />
                                        <TextFieldsIcon className='edit' />
                                    </div>) : "" }
                                </Accordion>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
        ));
    }

    return (
        <div>
            <div className='question_form'>
                <br />
                <div className='section'>
                    <div className='question_title_section'>
                        <div className='question_form_top'>
                            <input type='text' className='question_form_top_name' style={{ color: 'black' }} placeholder='Untitled Document' />
                            <input type='text' className='question_form_top_desc' style={{ color: 'black' }} placeholder='Form Description' />
                        </div>
                    </div>

                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId={droppable}>
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {questionUI()}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        </div>
    );
}

export default QuestionForm;
