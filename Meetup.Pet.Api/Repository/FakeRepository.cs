using AnyClone;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;

namespace Meetup.Pet.Api.Repositories
{
    public abstract class FakeRepository<T>
        where T : IHasId
    {
        protected ConcurrentDictionary<int, T> Data = new ConcurrentDictionary<int, T>();

        protected FakeRepository()
        {
            foreach (var seed in SeedData())
                Data[seed.Id] = seed;
        }

        public IEnumerable<T> GetAll() => Data.Select(t => t.Value.Clone()).ToList();

        public T Get(int id)
        {
            var ret = Data.GetValueOrDefault(id);
            if (ret == null)
                return default;

            return ret.Clone();
        }
        public void Delete(int id)
        {
            Data.TryRemove(id, out var removed);
        }

        public T Create(T model)
        {
            model.Id = this.GetHighestId();
            var ret = Data[model.Id] = model;
            return ret.Clone();
        }

        public T Update(T model)
        {
            var id = model.Id;
            Data[id] = model;
            return model.Clone();
        }

        private int GetHighestId()
        {
            if (Data.Count == 0)
                return 1;

            return Data.Max(t => t.Key) + 1;
        }

        abstract protected IEnumerable<T> SeedData();
    }
}
