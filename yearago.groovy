#!/usr/bin/env groovy
import groovy.time.TimeCategory

def years = [1..10]
// yearAgo = Date.parse("t - 1 y").toString('yyyy/mm/dd');
//today = new Date()
//yearAgo = Date.today().add(-numYears).years().toString('yyyy/MM/dd');
//yearAgoOneDay = Date.today().add( {days: -numYears, years: -numYears}).toString('yyyy/MM/dd');
//beforeAfter = "after:" + yearAgoOneDay + " before:" + yearAgo;kk



def acceptedFormat = "yyyy/MM/dd"
def today = new Date() + 1
def currentdate = today.format(acceptedFormat)
println("Today is $currentdate")

(1..10).each { year ->
    println " Processing $year"
    use(TimeCategory) {
        def lastyear = today - year.year
        def yesteryear = lastyear + 1.day
        def afteryear = lastyear.format(acceptedFormat)
        def beforeyear = yesteryear.format(acceptedFormat)
        println "after:$afteryear before:$beforeyear"
    }


}