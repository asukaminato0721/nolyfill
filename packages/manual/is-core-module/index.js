"use strict";const e=require("module"),t=new Set(e.builtinModules.concat(e.builtinModules.map(e=>"node:"+e)).concat(["node:sea","node:test/reporters","node:test"]));module.exports=(e,o)=>t.has(e);