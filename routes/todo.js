const {Router} = require('express');
const express = require('express')
const Todo = require('../models/todo.js')
const router = Router();

router.use(express.json())

// Получение списка задач

router.get('/', (req, res) => {
    try{

    }catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// Создание новой задачи

router.post('/', async (req, res) => {
    try{
        const todo = await Todo.create({
            title: req.body.title,
            done: false,
        })
        console.log(todo)
        res.status(201).json({todo})
    }catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// Модификация задачи

router.put('/:id', (req, res) => {
    try{

    }catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// Удаление задачи

router.delete('/:id', (req, res) => {
    try{

    }catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
})

module.exports = router