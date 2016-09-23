# aurelia-typescript-coverage
An example of karma coverage of typescript source

For those of you coming from this [stack overflow question](http://stackoverflow.com/questions/39650904/how-do-i-get-the-aurelia-cli-to-provide-a-stack-trace-on-a-gulp-plugin-error), follow these steps:

1. `npm install`
2. `au build`
3. `au test`

You should see the following in your console:

```
...truncated...
22 09 2016 20:13:09.397:DEBUG [karma]: Run complete, exiting.
22 09 2016 20:13:09.397:DEBUG [launcher]: Disconnecting all browsers
{ uid: 0,
  name: 'unit',
  branch: false,
  error:
   { [TypeError: Cannot read property 'split' of null]
     domain:
      Domain {
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        members: [] },
     domainThrown: true },
  duration: [ 1, 558462284 ],
  time: 1474593189477 }
{ [TypeError: Cannot read property 'split' of null]
  domain:
   Domain {
     domain: null,
     _events: {},
     _eventsCount: 0,
     _maxListeners: undefined,
     members: [] },
  domainThrown: true }
22 09 2016 20:13:09.493:DEBUG [launcher]: Process Chrome exited with code 0
22 09 2016 20:13:09.493:DEBUG [temp-dir]: Cleaning temp dir /var/folders/6n/_7l5vc8j0rx42w6vd4sxj4040000gp/T/karma-83989869
22 09 2016 20:13:09.496:DEBUG [coverage]: Writing coverage to /Users/russwatson/Documents/projects/aurelia-typescript-coverage-1/coverage/Chrome 53.0.2785 (Mac OS X 10.11.6)
22 09 2016 20:13:09.556:DEBUG [launcher]: Finished all browsers
... Console is hung ...
```

Pressing CTRL+C does not break out of the console. How do I get a stack trace for the error so that it can be resolved?