import { Body, Controller, Delete, Get, Post } from '@nestjs/common';

const users = [
    {
        id:1,
        name:'lorenzo'
    },
    {id:2,
    name:'luca'}
];

@Controller('users')
export class UsersController {
    
    @Get()
    getUsers(){
        return users;
    }

    @Get()
    getUser(id: number){
        return users.find(user => user.id === id);
    }

    @Post()
    insertUser(@Body() user){
        console.log(user);
        return user;
    }
    //post, put(id), delete(id)

    @Delete()
    deleteUser(id:number){
        delete users[id];
    }
}
