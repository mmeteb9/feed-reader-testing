/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* this test ensures that the feed url is defined
         * and not empty.
         */
        it('Each feed has a URL defined and not empty', function () {
            for (let x of allFeeds) {
                expect(x.url).toBeDefined();
                expect(x.url.length).not.toBe(0);
            }
        })

        /* This test ensures that the feed name is defined
         * and not empty.
         */
        it('Each feed has a name defined and not Defined', function () {
            for (let x of allFeeds) {
                expect(x.name).toBeDefined();
                expect(x.url.length).not.toBe(0);
            }
        })
    });




    /* This suite is all about the Menu element
     * and its showing and hiding status in our application.*/

    describe('The menu', function () {
     /* This test ensures the menu element is hidden by default */

        it('the menu is hidden by default', function () {

            expect($('body').hasClass('menu-hidden')).toBeTruthy();

        });

        /*This test ensures the menu changes
      visibility when the menu icon is clicked */
        it('Async menu changes visibility when the menu icon is clicked', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


    });



        /* This suite is for "Initial Entries" that appear after all feeds is loaded*/
            describe('Initial Entries', function () {


      /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single entry element within the .feed container
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        it('there is at least single entry element', function () {
          //  expect($('.feed').children.length).toBeGreaterThanOrEqual(1);
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });





    /* This test suite is about adding new feed and what happened then */
    describe('New Feed Selection', function () {


              /* This test ensures when a new feed is loaded
               * the content actually changes.
               */
        let oldFeed;
        beforeEach(function (done) {

            loadFeed(0, function () {
                oldFeed = $('.feed').html();
                loadFeed(1,done)

            })
        })
        it('A new feed is loaded  ', function () {
            expect($('.feed').html()).not.toBe(oldFeed);
        })

    })

  }());
