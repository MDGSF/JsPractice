#include "myobject.h"

#include "uv.h"

using namespace Napi;

void MyObject::Init(Napi::Env env, Napi::Object exports) {
  Napi::Function func = DefineClass(env, "MyObject", {});

  Napi::FunctionReference* constructor = new Napi::FunctionReference();
  *constructor = Napi::Persistent(func);
  env.SetInstanceData(constructor);

  exports.Set("MyObject", func);
}

Napi::Object MyObject::NewInstance(Napi::Env env, Napi::Value arg) {
  Napi::Object obj = env.GetInstanceData<Napi::FunctionReference>()->New({arg});
  return obj;
}

MyObject::MyObject(const Napi::CallbackInfo& info)
    : Napi::ObjectWrap<MyObject>(info) {
  this->m_val = info[0].As<Napi::Number>().DoubleValue();
}
