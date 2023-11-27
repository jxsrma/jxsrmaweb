## Discontinued - <a href = 'https://github.com/jxsrma/dj-web-front'> Visit new Repo </a>
<center>
<a href = 'https://jxsrma.herokuapp.com'>
<img src="https://i.ibb.co/Rztmh4g/JXSRMA.png" alt="drawing" width="300"/>
</a>
</center>

<br>

# JXSRMA Offical Website

This website is an Artist Profile Website.

## Languages & Framework

- React.js
- Django

## Features

- User can send Demo & Query direct to admin.
- After submittion, User will get a confirmation Email.
- Admin can upload Images and released cover art via Django Admin Pannel.


<br>
<br>
<center>
<table style="border : 0;">
<tr>

<td>
<a href = 'https://jxsrma.openinapp.co/youtube/11fe3'>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="Youtube" width="30"/>
</a>
</td>

<td>
<a href = 'https://jxsrma.openinapp.co/instagram/jxsrma'>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="Instagram" width="25"/>
</a>
</td>

<td>
<a href = 'https://jxsrma.openinapp.co/facebook/c0972'>
<img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt="Facebook Page" width="25"/>
</a>
</td>

<td>
<a href = 'https://jxsrma.openinapp.co/twitter/jxsrma'>
<img src="https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png" alt="Twitter" width="30"/>
</a>
</td>

<td>
<a href = 'https://www.linkedin.com/in/jashsharma/'>
<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin" width="25"/>
</a>
</td>

</tr>
</table>
</center>

# Installation Guide

<br/>

## Install Node Modules

<br/>

Use the following command to install all the required pacakages for react app

```
npm install
```

<br/>

## Using Virtual Enviroment in Python

<br/>

 - First intall virtualenv in your main environment
```
pip install virtualenv
```

- Create Virtual Environment
```
virtualenv EnvName
```

- Use Environment
```
EnvName\Scripts\activate
```

**Note:**
You may face error while activating environment. This is due to restriction in windows. Use Following to unlock restrictions.

```
set-executionpolicy remotesigned
```

- To create a requirements.txt
```
pip freeze > requirements.txt
```

- To install a requirements.txt file in your environment
```
pip install -r requirements.txt
```

- To update all packages
```
pip freeze | %{$_.split('==')[0]} | %{pip install --upgrade $_}
```

- To close the environment
```
deactivate
```
