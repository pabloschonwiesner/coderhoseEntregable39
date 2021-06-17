const request = require('supertest')('http://localhost:3232')
const expect = require('chai').expect

const ProductoServicio = require('./../services/producto.service')


const productoServicio = new ProductoServicio()

describe('Test de integracion de productos', function() {
  describe('Listado de producto', function () {
    
    it('debería traer todos los productos', async function() {
      
      expect(response.status).to.eql(200)
    })
    it('debería traer todos los productos', async function() {
      let response = await request.get('/api/producto')
      let productos = response.body
      expect(productos).to.include.keys('data')
    })

  })
})